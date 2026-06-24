import { rm } from 'fs/promises';
import { exec } from 'node:child_process';
import { existsSync } from 'node:fs';
import { resolve } from 'node:path';
import { chdir } from 'node:process';

export const buildModule = async (module, profile) => {
    console.log(`buildModule [module - ${module}, profile - ${profile}] start.`);
    await execTask(`pnpm run build:${module}:${profile}`);
    console.log(`buildModule [module - ${module}, profile - ${profile}] done.`);
};

export const initModule = async (path) => {
    console.log(`initModule [${path}] start.`);
    chdir(path);
    // 安装模块依赖
    await execTask(`pnpm install`, path);
    console.log(`initModule [${path}] done.`);
};

export const updateModule = async (moduleDir) => {
    console.log(`Current module - ${moduleDir}`);
    chdir(moduleDir);
    console.log(`Current dir - ${moduleDir}`);
    if (existsSync(resolve(moduleDir, 'package-lock.json'))) {
        await rm(resolve(moduleDir, 'package-lock.json'));
    }
    if (existsSync(resolve(moduleDir, 'pnpm-lock.yaml'))) {
        await rm(resolve(moduleDir, 'pnpm-lock.yaml'));
    }
    if (existsSync(resolve(moduleDir, 'node_modules'))) {
        await rm(resolve(moduleDir, 'node_modules'), { recursive: true });
    }
    console.log(`${moduleDir} - ncu update...`);
    await execTask(`ncu -u`);
};

export const initComposerModule = async (moduleDir) => {
    console.log(`Current module - ${moduleDir}`);
    chdir(moduleDir);
    if (existsSync(resolve(moduleDir, 'vendor'))) {
        await rm(resolve(moduleDir, 'vendor'), { recursive: true });
    }
    if (existsSync(resolve(moduleDir, 'composer.json'))) {
        await execTask(`composer install`, moduleDir);
    }
};

export const updateComposerModule = async (moduleDir) => {
    console.log(`Current module - ${moduleDir}`);
    chdir(moduleDir);
    if (existsSync(resolve(moduleDir, 'vendor'))) {
        await rm(resolve(moduleDir, 'vendor'), { recursive: true });
    }
    if (existsSync(resolve(moduleDir, 'composer.json'))) {
        await execTask(`composer update`, moduleDir);
    }
};

export const execTask = async (task, path) => {
    return new Promise((resolve, reject) => {
        exec(task, { cwd: path }, (e) => {
            if (e) {
                console.log(e);
                reject();
            } else {
                resolve();
            }
        });
    });
};
