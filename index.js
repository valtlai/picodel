import fsPromises from 'node:fs/promises';
import path from 'node:path';

const osNormalize = (filePath) => {
	return filePath.replaceAll(path.posix.sep, path.sep);
};

const isSubpathOf = (childPath, parentPath) => {
	const parentRelative = path.relative(parentPath, osNormalize(childPath));
	return parentRelative && !parentRelative.startsWith(`..${path.sep}`);
};

const cwd = process.cwd();

export default async function picodel(...filePaths) {
	for (const [index, filePath] of filePaths.entries()) {
		if (!isSubpathOf(filePath, cwd)) {
			throw new Error(`Path must be inside CWD: #${index + 1}: ${filePath}`);
		}
	}

	await Promise.all(
		filePaths.map((filePath) =>
			fsPromises.rm(filePath, { recursive: true, force: true }),
		),
	);
}
