exports.generateEmailMessage = (verificationURL, title, desc) => `
  <!DOCTYPE html>
  <html>
  <head>
      <title>${title}</title>
      <style>
          body {
              font-family: Arial, sans-serif;
              margin: 0;
              padding: 0;
              color: #ffffff;
          }
          .container {
              max-width: 600px;
              margin: 0 auto;
              background-color: #4f88e3;
              padding: 20px;
              box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
              text-align: center; 
          }
          h1 {
              text-align: center;
          }
          p {
              line-height: 1.5;
          }
          a {
              display: inline-block;
              background-color: #ffffff;
              color: #4f88e3;
              padding: 10px 20px;
              text-decoration: none;
              border-radius: 5px;
              transition: background-color 0.3s ease;
          }
          a:hover {
              background-color: #e6e6e6;
          }
      </style>
  </head>
  <body>
      <div class="container">
          <h1>Komite Etik Universitas Yarsi</h1>
          <p>${desc}</p>
          <a href="${verificationURL}">${title}</a>
          <div>
            <p>Salam,</p>
            <p>Team Komite Etik Universitas Yarsi</p>
          </div>
      </div>
  </body>
  </html>
`;
