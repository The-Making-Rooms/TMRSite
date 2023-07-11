module.exports = {
    content: [
      './_drafts/**/*.html',
      './_includes/**/*.html',
      './_layouts/**/*.html',
      './_posts/*.md',
      './*.md',
      './*.html',
    ],
    theme: {
        extend: {
          colors: {
            pastelred: '#ffadad',
            pastelredhighlight: '#ff1414',
            pastelorange: '#ffd6a5',
            pastelorangehighlight: '#ff8f0a',
            pastelyellow: '#fdffb6',
            pastelyellowhighlight: '#e4eb00',
            pastelgreen: '#caffbf',
            pastelgreenhighlight: '#29f000',
            pastelblue: '#9bf6ff',
            pastelbluehighlight: '#00e8ff',
            pastelindigo: '#a0c4ff',
            pastelindigohighlight: '#0564ff',
            pastelpurple: '#bdb2ff',
            pastelpurplehighlight: '#3a1aff',
            pastelpink: '#ffc6ff',
            pastelpinkhighlight: '#ff2eff',
            tmrorange: '#fadb00',
            tmrpastel: '#fff8c7',
          },

          dropShadow: {
            boxShadow: {
              custom: '0.35rem 0.35rem #FADB00, 0.25rem 0.45rem black, 0.25rem 0.25rem black, 0.45rem 0.45rem black, 0.45rem 0.25rem black',
            },

        },

      },
    },
    plugins: []
    }