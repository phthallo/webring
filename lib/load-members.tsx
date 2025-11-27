import { readdir } from "node:fs/promises";
import path from 'path';
import yaml from "yaml"

const libDir = path.join(process.cwd(), 'members');


let yamlFilesCache: string[] | null = null;
let membersDataCache: any[] | null = null;

async function getYamlFiles(): Promise<string[]> {
    if (yamlFilesCache) {
        return yamlFilesCache;
    }
    const files = await readdir(libDir);
    const yamlFiles = files.filter(f => f.endsWith('.yaml'));
    yamlFilesCache = yamlFiles;
    return yamlFiles;
}


export async function loadMembers(): Promise<string[]> {
    const files = await getYamlFiles();
    return files.map(f => f.slice(0, -5));
}


export async function loadMembersData(): Promise<any[]> {
    if (membersDataCache) {
        return membersDataCache;
    }
    const yamlList = await getYamlFiles();
    const members = await Promise.all(
        yamlList.map(async (file) => {
            const filePath = path.join(libDir, file);
            const text = await Bun.file(filePath).text();
            return yaml.parse(text);
        }))
    const filtered = members.filter(Boolean);
    membersDataCache = filtered;
    return filtered;
}


export async function loadSpecificMember(member: string): Promise<any> {
    const filePath = path.join(libDir, `${member}.yaml`);
    try {
        const text = await Bun.file(filePath).text();
        return yaml.parse(text);
    } catch {
        return ""
    }
}


export async function loadMemberOffset(member: string, offset: number): Promise<any> {
    const allMembers = await loadMembers();
    const memberIndex = allMembers.indexOf(member);
    const offsettedMember = allMembers[getValues(memberIndex + offset, allMembers.length)];
    return loadSpecificMember(offsettedMember);
}


export function getValues(index: number, membersCount: number): number {
    return ((index % membersCount) + membersCount) % membersCount;
}