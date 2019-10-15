const StyleDictionary = require('style-dictionary');

const format = function(dictionary, config) {
  const theme = {
    "name": `Nu Disco ${config.themeType}`,
    "type": config.themeType,
    "colors": {},
  }
  
  // Filter out the design tokens we don't want to add to the
  // 'colors' object
  dictionary.allProperties.filter((token) => {
    return !['color','tokenColors'].includes(token.path[0])
  }).forEach((token) => {
    theme.colors[token.name] = token.value;
  });
  
  // Map the tokenColors
  theme.tokenColors = dictionary.allProperties.filter((token) => {
    return token.path[0] === 'tokenColors'
  }).map((token) => ({
    scope: token.name,
    settings: {
      foreground: token.value,
      fontStyle: token.fontStyle,
    }
  }));
  
  return JSON.stringify(theme, null, 2);
}

const themeTypes = [`dark`, `light`];

themeTypes.forEach((themeType) => {
  StyleDictionary.extend({
    source: [
      `tokens/core.json5`,
      `tokens/${themeType}/*.json5`,
      `theme/**/*.json5`
    ],
    format: {
      vsCodeTheme: format
    },
    // Add custom transforms
    transform: {
      nameTransform: {
        type: 'name',
        matcher: (token) => token.path[0] !== 'tokenColors',
        transformer: (token) => token.path.join('.')
      },
      nameSyntaxTokenTransform: {
        type: 'name',
        matcher: (token) => token.path[0] === 'tokenColors',
        transformer: (token) => {
          // This allows you to have tokens at multiple levels
          // like `comment` and `comment.line`
          if (token.name === 'default') {
            return token.path.slice(1,-1).join('.')
          } else {
            return token.path.slice(1).join('.')
          }
        }
      }
    },
    platforms: {
      vscode: {
        buildPath: `dist/`,
        themeType: themeType,
        transforms: [`attribute/cti`,`nameTransform`,`nameSyntaxTokenTransform`],
        files: [{
          destination: `nu-disco-${themeType}.color-theme.json`,
          format: `vsCodeTheme`
        }]
      }
    }
  }).buildAllPlatforms();
});