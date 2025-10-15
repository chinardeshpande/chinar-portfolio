import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import yaml from 'js-yaml';

export async function GET() {
  const contentPath = path.join(process.cwd(), 'content', 'case-studies', 'index.yaml');
  const content = yaml.load(fs.readFileSync(contentPath, 'utf8'));

  return NextResponse.json(content);
}
