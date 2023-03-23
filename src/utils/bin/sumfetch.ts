import config from '../../../config.json';

const sumfetch = async (args: string[]): Promise<string> => {
  if (Math.random() > 0.5) {
    return `                                                  
             @@@@@@@@@@@@@                   sumfetch
        @@@@               @@@@             -----------
      @@                       @@            ABOUT
    @@                           @@          ${config.name}
  @@                               @@        <u><a href="${config.resume_url}" target="_blank">resume</a></u>
 @@                         @@@     @@      爵 <u><a href="${config.repo}" target="_blank">Github repo</a></u>
@@        @@@                        @@     -----------
@@                                   @@      CONTACT
@@             .@@@@@@@@@@.          @@      <u><a href="mailto:${config.email}" target="_blank">${config.email}</a></u> 
 @@           @@          @@        @@       <u><a href="https://github.com/${config.social.github}" target="_blank">github.com/${config.social.github}</a></u>
  @@           @@        @@        @@        <u><a href="https://linkedin.com/in/${config.social.linkedin}" target="_blank">linkedin.com/in/${config.social.linkedin}</a></u>
   @@             @@@@@@          @@        -----------
     @@@                        @@@         ⛿ PROJECTS 
        @@@                  @@@ @@         ☞ <u><a href="https://github.com/sl5035/Space-Debris-Reentry">${config.social.github}/Space-Debris-Reentry-Prediction</a></u>
         @|  @@@@@@@@@@@@@@@@   @@          ☞ <u><a href="https://github.com/sl5035/3D-HisSite">${config.social.github}/3d-HisSite</a></u>

`;
  } else {
    return `
           ▄▓▓▓▓▓▓▓▓▓▓▓▓▓▓▄                  sumfetch
        ▄▓▓▀ ▄▓▓▀▓▓▓▀▓▓▄ ▀▀▓▓▄              -----------
      ▓▓▀  ▄▓▀   ▐▓▓  ▀▓▓    ▓▓▄             ABOUT
    ▄▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓            ${config.name}
   ▓▓     ▓▓▓    ▐▓▓    ▐▓▓     ▓▓           <u><a href="${config.resume_url}" target="_blank">resume</a></u>
▐▓▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▓       爵 <u><a href="${config.repo}" target="_blank">Github repo</a></u>
▐▓                                 ▐▓       -----------
▐▓        > L I V E T E R M        ▐▓        CONTACT 
▐▓                                 ▐▓        <u><a href="mailto:${config.email}" target="_blank">${config.email}</a></u>
▐▓▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▓        <u><a href="https://github.com/${config.social.github}" target="_blank">github.com/${config.social.github}</a></u>
   ▓▓      ▐▓▓    ▓▓    ▐▓▓     ▓▓           <u><a href="https://linkedin.com/in/${config.social.linkedin}" target="_blank">linkedin.com/in/${config.social.linkedin}</a></u>
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓           -----------
      ▓▓▓   ▐▓▓   ▓▓   ▓▓▓   ▓▓▀            ⛿ PROJECTS  
        ▀▓▓▄▄ ▀▓▓▄▓▓▄▓▓▓▄▄▓▓▀               ☞ <u><a href="https://github.com/sl5035/Space-Debris-Reentry">${config.social.github}/Space-Debris-Reentry-Prediction</a></u>
            ▀▓▓▓▓▓▓▓▓▓▓▓▀▀                  ☞ <u><a href="https://github.com/sl5035/3D-HisSite">${config.social.github}/3d-HisSite</a></u>

`;
  }
};

export default sumfetch;
