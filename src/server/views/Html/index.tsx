import * as React from 'react';

export interface Props {
  appString: string;
  clientBundle: string;
  styleElement: React.ReactElement<{}>[];
}

export default class Html extends React.Component<Props, {}> {
  public render() {
    const { appString, clientBundle, styleElement } = this.props;

    return (
      <html>
        <head>
          <meta charSet="utf-8" />
          <title>Projekt Fit Life</title>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=0.9"
          />
          <meta
            name="description"
            content="Projekt Fit Life to inicjatywa zachęcająca do prowadzenia zdrowego trybu życia, a tym samym walkę z szerzącym się problemem społecznym."
          />
          <meta
            name="keywords"
            content="fit, life, projekt, zdrowe, odżywianie, opole, ćwiczenia, zwolnienizteorii, lo2"
          />
          <meta name="author" content="Mikołaj Palkiewicz" />
          {styleElement}
        </head>
        <body>
          <main id="app" dangerouslySetInnerHTML={{ __html: appString }} />
          {clientBundle && <script src={clientBundle} />}
        </body>
      </html>
    );
  }
}
