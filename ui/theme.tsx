export default {
    space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
    fonts: {
      body: '"Source Sans Pro", Helvetica, ans-serif',
      heading: 'inherit',
      monospace: 'Menlo, monospace'
    },
    fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 96],
    fontWeights: {
      body: 300,
      heading: 500,
      bold: 500
    },
    lineHeights: {
      body: 1.5,
      heading: 1.7
    },
    colors: {
      text: '#555',
      background: '#fff',
      primary: '#6bd4c8',
      darkBackground: '#222'
    },
    sizes: {
      container: '60em'
    },
    styles: {
      root: {
        fontFamily: 'body',
        lineHeight: 'body',
        fontWeight: 'body',
        fontSize: 3
      },
      h1: {
        color: 'text',
        fontFamily: 'heading',
        lineHeight: 'heading',
        fontWeight: 'heading',
        fontSize: 2
      },
      h2: {
        color: 'text',
        fontFamily: 'heading',
        lineHeight: 'heading',
        fontWeight: 'heading',
        fontSize: 5
      },
      h3: {
        color: 'text',
        fontFamily: 'heading',
        lineHeight: 'heading',
        fontWeight: 'heading',
        fontSize: 3
      },
      h4: {
        color: 'text',
        fontFamily: 'heading',
        lineHeight: 'heading',
        fontWeight: 'heading',
        fontSize: 2
      },
      h5: {
        color: 'text',
        fontFamily: 'heading',
        lineHeight: 'heading',
        fontWeight: 'heading',
        fontSize: 1
      },
      h6: {
        color: 'text',
        fontFamily: 'heading',
        lineHeight: 'heading',
        fontWeight: 'heading',
        fontSize: 0
      },
      p: {
        color: 'text',
        fontFamily: 'body',
        fontWeight: 'body',
        lineHeight: 'body'
      },
      small: {
        fontFamily: 'body',
        fontWeight: 'body',
        lineHeight: 'body',
        fontSize: 1
      },
      a: {
        color: 'primary'
      },
      pre: {
        fontFamily: 'monospace',
        overflowX: 'auto',
        code: {
          color: 'inherit'
        }
      },
      code: {
        fontFamily: 'monospace',
        fontSize: 'inherit'
      },
      table: {
        width: '100%',
        borderCollapse: 'separate',
        borderSpacing: 0
      },
      th: {
        textAlign: 'left',
        borderBottomStyle: 'solid'
      },
      td: {
        textAlign: 'left',
        borderBottomStyle: 'solid'
      },
      img: {
        maxWidth: '100%'
      },
      navlink: {
        color: 'text',
        fontWeight: 'body',
        fontSize: 3,
        cursor: 'pointer',
        ':hover': {
          color: 'primary'
        }
      },
      whiteSection: {
        backgroundColor: 'background'
      },
      darkSection: {
        backgroundColor: 'darkBackground',
        color: 'background',
        background: 'url(/images/bg.jpg)',
        backgroundAttachment: 'fixed'
      }
    }
  };