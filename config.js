
const format = function(dictionary) {
  const theme = {
    "name": "Pascal",
    "type": "dark",
    "colors": {},
  }
  
  dictionary.allProperties.filter((token) => {
    return !['color','tokenColors'].includes(token.path[0])
  }).forEach((token) => {
    theme.colors[token.name] = token.value;
  });
  
  theme.tokenColors = dictionary.allProperties.filter((token) => {
    return token.path[0] === 'tokenColors'
  }).map((token) => ({
    scope: token.name,
    settings: {
      foreground: token.value,
      fontStyle: token.fontStyle,
    }
  }));
  
  Object.values(dictionary.properties._tokenColors)
    .forEach((token) => {
      theme.tokenColors.push(token);
    });
  
  return JSON.stringify(theme, null, 2);
}

module.exports = {
  source: [`tokens/**/*.json5`,`theme/**/*.json5`],
  format: {
    vsCodeTheme: format
  },
  transform: {
    nameTransform: {
      type: 'name',
      matcher: (token) => token.path[0] !== 'tokenColors' || '_tokenColors',
      transformer: (token) => token.path.join('.')
    },
    nameSyntaxTokenTransform: {
      type: 'name',
      matcher: (token) => token.path[0] === 'tokenColors',
      transformer: (token) => {
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
      transforms: [`attribute/cti`,`nameTransform`,`nameSyntaxTokenTransform`],
      files: [{
        destination: `PascalTheme.color-theme.json`,
        format: `vsCodeTheme`
      }]
    }
  }
}