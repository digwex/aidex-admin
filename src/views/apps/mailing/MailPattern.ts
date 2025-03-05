export const MailPattern = (text: string) =>
  `
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office" lang="ru">
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <meta name="color-scheme" content="only"/>
    <meta name="supported-color-schemes" content="light"/>
    <title>BinIQ</title>
    <style type="text/css">
      @import url('https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;700;800&display=swap');

      u + .body .gmail-blend-screen {
        background: #000;
        mix-blend-mode: screen;
      }
      u + .body .gmail-blend-difference {
        background: #000;
        mix-blend-mode: difference;
      }

      table {
        border-spacing: 0;
        mso-cellspacing: 0;
        mso-padding-alt: 0;
      }

      td {
        padding: 0;
      }

      #outlook a {
        padding: 0;
      }

      a {
        text-decoration: none;
        font-size: 16px;
      }

      .logo {
        background-position: left top;
        background-size: cover;
        background-image: url('https://byfal.io/img/emails/top-dark_v3.png');
        background-repeat: no-repeat;
      }

      .light-blue-color-bg {
        background-color: #dde0e1;
      }

      .blue-white-color-bg {
        color: #fafdfe;
      }

      .dark-blue-color {
        color: #131519;
      }
      .dark-blue-gradient-bg {
        background: linear-gradient(222deg, #23262e, rgba(35, 38, 46, 0)) 0 0,
          #131519;
      }
      .greey-color-bg {
        color: #ffffff0d;
      }
      .green-color {
        color: #1fbf6c;
      }
      .blue-color-bg {
        background-color: #909da9;
      }

      .dark-greey-color {
        color: #263238;
      }
      .white-color {
        color: #ffffff;
      }
      .white-color-bg {
        background-color: #ffffff;
      }
      .text_container img {
        max-width:100%;
      }

      h1,h2,h3,h4,h5,h6,p {
        margin: 5px 0px !important;
      }

      .text_container .ii a[href] {
        color: #004cff;
      }

      .text_container figure {
        width: 100% !important;
        margin: 0 !important;
        max-width: 570px !important;
        margin-block-start: 0px !important;
        margin-block-end: 0px!important;
        margin-inline-start: 0px !important;
        margin-inline-end: 0px !important;
      }

      figure {
        margin: 0 !important;
        max-width: 570px !important;
        margin-block-start: 0em !important;
        margin-block-end: 0em !important;
        margin-inline-start: 0px !important;
        margin-inline-end: 0px !important;
      }

      .ii a[href] {
        color: #004cff;
      }

      .text_container  a {
        color: #004cff;
      }

      .text_container u {
        color: inherit;
      }

      .table .im {
        color: inherit !important;
      }

      .im {
        color: inherit !important;
      }

      .im {
        color: inherit !important;
      }

      div > span.im {
        color: inherit !important;
      }

      p > span.im {
        color: inherit !important;
      }

      .text_container span[style~='color:'] a {
        color: inherit;
      }

      .text_container span[style~='color:'] u {
        color: inherit;
      }

      .__se__float-left {
        float: left;
        text-align: left;
      }
      .__se__float-right {
        float: right;
        text-align: right;
      }
      .__se__float-center {
        float: center;
        text-align: center;
      }
      .__se__float-none {
        float: none;
        text-align: left;
      }

      p,div {
        font-size:16px;
      }

    </style>
  </head>

  <body class="light-blue-color-bg" style="margin: 0; padding: 0; min-width: 100%; background: #ffffff">
    <center class="light-blue-color-bg" style="width: 100%; table-layout: fixed; background-color: #ffffff">
      <div class="blue-white-color-bg" style="max-width: 650px; background-color: #fafdfe">
        <div class="white-color" style="font-size: 0px; color: #ffffff; line-height: 1px; mso-line-height-rule: exactly; display: none; max-width: 0px; max-height: 0px; opacity: 0; overflow: hidden; mso-hide: all;"></div>
        <table align="center" border="0" cellspacing="0" cellpadding="0" role="presentation" class="dark-blue-color dark-blue-gradient-bg gmail-blend-screen" style="color-scheme: light only; color: #ffffff; font-family: 'Manrope', sans-serif, Arial, Helvetica; background: linear-gradient(222deg, #23262e, rgba(35, 38, 46, 0)) 0 0, #131519; background-image: url('https://byfal.io/img/emails/background-dark.png'); margin: 0; padding: 0; width: 100%; max-width: 600px;">
          <tbody style="background-color: #23262e" class="gmail-blend-difference">
            <tr class="wrapper_logo">
              <td background="https://byfal.io/img/emails/top-dark_v3.png" style="background-position: left top; background-repeat: no-repeat; background-size: cover;" class="logo">
                <table align="center" border="0" cellspacing="0" cellpadding="0" role="presentation">
                  <tr>
                    <td style="position: relative; padding: 48px 0 50px 0; text-align: center; z-index: 1;">
                      <a style="color:#ffffff" href="https://byfal.io/" target="_blank">
                        <img src="https://byfal.io/img/emails/logo_mailing_icon.png" border="0" width="143" height="36" style="width: 143px; height: 36px" />
                      </a>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
            <tr>
              <td background="https://byfal.io/img/emails/bottom-dark_v3.png" style=" background-position: left bottom; background-repeat: no-repeat; background-size: 100%; padding-bottom:100px">
                <table width="100% !important" style="width: 100%" align="center" border="0" cellspacing="0" cellpadding="0" role="presentation">
                  <tr>
                    <td class="text_container" style="padding-right:15px; padding-left: 15px">
                        ${text}
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
            <tr>
            </tr>
            <tr>
              <td class="footer">
                <table border="0" width="100% !important" style="width: 100%" cellspacing="0" cellpadding="0" role="presentation">
                  <tr style="position: relative; z-index: 1">
                    <td class="white-color greey-color-bg" style=" color: #ffffff; background-color: #ffffff0d; padding: 23px 15px 21px 15px; font-size: 12px; font-weight: 400;">
                      <p style="margin: 0 0 8px 0; font-size: 12px;">
                        <span style="font-weight: 700">Please do not reply to this email.</span>
                        <br />
                        <br />
                        You received this email because you provided this email
                        address during registration on the website <a href="https://byfal.io/" target="_blank" style="font-size: 12px; color: #ffffff">byfal.io/</a>
                        <br />
                      </p>
                      <div class="blue-color-bg" style=" margin: 0 0 22px 0; background-color: #909da9; opacity: 0.2; height: 1px; width: 100%;"></div>
                      <table width="100%" align="left" border="0" cellspacing="0" cellpadding="0" role="presentation">
                        <tbody>
                          <tr>
                            <td align="left" valign="top">
                              <span width="110">
                                © 2023 By futures and leverage - go to the moon,
                                <br />
                                Team -
                                <a href="https://byfal.io/" target="_blank" class="green-color" style="font-size: 12px; color: #1fbf6c">https://byfal.io/</a>
                                ✌️
                              </span>
                              <table align="right" border="0" cellspacing="0" cellpadding="0">
                                <tbody>
                                  <tr>
                                    <td align="left">
                                      <a style="margin-right: 10px" href="https://twitter.com/byfalio" target="_blank">
                                        <img src="https://byfal.io/img/emails/twitter_mailing_icon.png" alt="Twitter link" border="0" width="15px"/>
                                      </a>
                                      <a style="margin-right: 10px" href="https://www.instagram.com/byfalio/" target="_blank">
                                        <img src="https://byfal.io/img/emails/instagram_mailing_icon.png" alt="Instagram link" border="0" width="15px"/>
                                      </a>
                                      <a style="margin-right: 10px" href="https://t.me/byfalio" target="_blank">
                                        <img src="https://byfal.io/img/emails/telegram_mailing_icon.png" alt="Telegram link" border="0" width="15px"/>
                                      </a>
                                      <a href="https://medium.com/@ByFalio" target="_blank">
                                        <img src="https://byfal.io/img/emails/medium_mailing_icon.png" alt="Medium link" border="0" width="15px"/>
                                      </a>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </center>
  </body>
</html>
`
