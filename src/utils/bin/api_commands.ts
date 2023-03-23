// List of commands that require API calls

import { getProjects, getQuote, getReadme, getWeather } from '../api';

export const ls = async (args: string[]): Promise<string> => {
  const projects = await getProjects();
  return projects.map((repo) => `${repo.name}`).join('\n');
};

export const projects = async (args: string[]): Promise<string> => {
  const projects = await getProjects();
  return projects
    .map(
      (repo) =>
        `${repo.name} - <a class="text-dark-red dark:text-dark-red underline" href="${repo.html_url}" target="_blank">${repo.html_url}</a>`,
    )
    .join('\n');
};

export const quote = async (args: string[]): Promise<string> => {
  const data = await getQuote();
  return data.quote;
};

export const readme = async (args: string[]): Promise<string> => {
  return `Opening GitHub README...\n
  <img src="https://media.giphy.com/media/hvRJCLFzcasrR4ia7z/giphy.gif" width="22">hello there!

I study cs and business at Columbia University. I am also a film minor.

- 🔭 research: ml and dl, computer vision, recurrent neural networks, web development (backend)
- 🌱 hobbies: product & software design, drum, djing, watching movies
- 🌐 websites: [🖥️ official](<a href="https://robinlee.dev">https://robinlee.dev</a>) | [💻 terminal](<a href="https://term.robinlee.dev">https://term.robinlee.dev</a>)

<p align="center"> <img src="https://github-readme-stats.vercel.app/api?username=sl5035&hide_border=true&theme=radical" alt="sl5035 github stats" />`;
};

export const weather = async (args: string[]): Promise<string> => {
  const city = args.join('+');
  if (!city) {
    return 'Usage: weather [city]. Example: weather casablanca';
  }
  const weather = await getWeather(city);
  return weather;
};
