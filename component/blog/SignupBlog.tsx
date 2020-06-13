import React from 'react';
declare var $: any;

export default class extends React.Component {

    componentDidMount() {
        const html = `
        <script type="text/javascript" src="https://cabn.maillist-manage.com/js/optin.min.js" onload="setupSF('sf3e0ded5e28c69bd8d6f856c2bb2c0cc4472676965757f09e','ZCFORMVIEW',false,'light',false,'0')"></script>
        <script type="text/javascript">
            function runOnFormSubmit_sf3e0ded5e28c69bd8d6f856c2bb2c0cc4472676965757f09e(th){
                /*Before submit, if you want to trigger your event, "include your code here"*/
            };
        </script>
        
        <style>
        #customForm.quick_form_18_css * {
            -webkit-box-sizing: border-box !important;
            -moz-box-sizing: border-box !important;
            box-sizing: border-box !important;
            overflow-wrap: break-word
        }
        @media only screen and (max-width: 200px) {.quick_form_18_css[name="SIGNUP_BODY"] { width: 100% !important; min-width: 100% !important; margin: 0px auto !important; padding: 0px !important } }
        @media screen and (min-width: 320px) and (max-width: 580px) and (orientation: portrait) {.quick_form_18_css[name="SIGNUP_BODY"] { max-width: 300px !important; margin: 0px auto !important; padding: 0px !important } }
        @media only screen and (max-device-width: 1024px) {.quick_form_18_css[name="SIGNUP_BODY"] { max-width: 500px !important; margin: 0px auto !important } }
        @media only screen and (max-device-width: 1024px) and (orientation: landscape) {.quick_form_18_css[name="SIGNUP_BODY"] { max-width: 700px !important; margin: 0px auto !important } }
        @media screen and (min-width: 475px) and (max-width: 980px) and (orientation: landscape) {.quick_form_18_css[name="SIGNUP_BODY"] { max-width: 400px !important; margin: 0px auto !important; padding: 0px !important } }
        </style>
        
        <!--Zoho Campaigns Web-Optin Form's Header Code Ends Here--><!--Zoho Campaigns Web-Optin Form Starts Here-->
        
        <div id="sf3e0ded5e28c69bd8d6f856c2bb2c0cc4472676965757f09e" data-type="signupform" style="opacity: 1;">
            <div id="customForm">
                <div class="quick_form_18_css" style="background-color: rgb(255, 255, 255); width: 300px; z-index: 2; font-family: &quot;Arial&quot;; border: 1px solid rgb(206, 206, 206); overflow: hidden" name="SIGNUP_BODY">
                    <div style="text-align: center">
                        <div style="font-size: 22px; font-family: Arial; font-weight: normal; color: rgb(67, 67, 67); text-align: left; padding: 15px; width: 100%; display: block; background-color: transparent" id="SIGNUP_HEADING">Join Our Newsletter</div>
                        <div style="position:relative;">
                            <div id="Zc_SignupSuccess" style="display:none;position:absolute;margin-left:4%;width:90%;background-color: white; padding: 3px; border: 3px solid rgb(194, 225, 154);  margin-top: 10px;margin-bottom:10px;word-break:break-all">
                                <table width="100%" cellpadding="0" cellspacing="0" border="0">
                                    <tbody>
                                        <tr>
                                            <td width="10%">
                                                <img class="successicon" src="https://cabn.maillist-manage.com/images/challangeiconenable.jpg" align="absmiddle">
                                            </td>
                                            <td>
                                                <span id="signupSuccessMsg" style="color: rgb(73, 140, 132); font-family: sans-serif; font-size: 14px;word-break:break-word">&nbsp;&nbsp;Thank you for Signing Up</span>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <form method="POST" id="zcampaignOptinForm" style="margin: 0px; width: 100%" action="https://maillist-manage.com/weboptin.zc" target="_zcSignup">
                            <div style="background-color: rgb(255, 235, 232); padding: 10px; color: rgb(210, 0, 0); font-size: 11px; margin: 20px 10px 0px; border: 1px solid rgb(255, 217, 211); opacity: 1; display: none" id="errorMsgDiv">Please correct the marked field(s) below.</div>
                            <div style="position: relative; width: 270px; height: 40px; margin-top: 15px; display: inline-block">
                                <div id="Zc_SignupSuccess" style="position: absolute; width: 87%; background-color: white; padding: 3px; border: 3px solid rgb(194, 225, 154); margin-bottom: 10px; word-break: break-all; opacity: 1; display: none">
                                    <div style="width: 20px; padding: 5px; display: table-cell">
                                        <img class="successicon" src="https://campaigns.zoho.com/images/challangeiconenable.jpg" style="width: 20px">
                                    </div>
                                    <div style="display: table-cell">
                                        <span id="signupSuccessMsg" style="color: rgb(73, 140, 132); font-family: sans-serif; font-size: 14px; line-height: 30px; display: block"></span>
                                    </div>
                                </div>
                                <input type="text" style="font-size: 14px; border-width: 0px 0px 2px; border-style: solid; width: 100%; height: 100%; z-index: 4; outline: none; padding: 5px 10px; box-sizing: border-box; color: rgb(0, 0, 0); text-align: left; font-family: Arial; background-color: rgb(255, 255, 255); border-radius: 0px; border-color: rgb(67, 67, 67)" placeholder="Email" changeitem="SIGNUP_FORM_FIELD" name="CONTACT_EMAIL" id="EMBED_FORM_EMAIL_LABEL">
                            </div>
                            <div style="position: relative; width: 270px; height: 40px; margin-top: 30px; display: inline-block">
                                <input type="text" style="font-size: 14px; border-width: 0px 0px 2px; border-style: solid; width: 100%; height: 100%; z-index: 4; outline: none; padding: 5px 10px; box-sizing: border-box; color: rgb(0, 0, 0); text-align: left; font-family: Arial; background-color: rgb(255, 255, 255); border-radius: 0px; border-color: rgb(67, 67, 67)" placeholder="Name" changeitem="SIGNUP_FORM_FIELD" name="LASTNAME" id="EMBED_FORM_NAME_LABEL">
                            </div>
                            <div style="position: relative; width: 150px; height: 40px; margin: 20px 115px 25px auto; display: inline-block">
                                <input type="button" style="text-align: center; width: 100%; height: 100%; z-index: 5; border: 0px; color: rgb(255, 255, 255); cursor: pointer; outline: none; font-size: 14px; background-color: rgb(67, 67, 67); border-radius: 5px" name="SIGNUP_SUBMIT_BUTTON" id="zcWebOptin" value="Join Now">
                            </div>
                            <input type="hidden" id="fieldBorder" value="">
                            <input type="hidden" id="submitType" name="submitType" value="optinCustomView">
                            <input type="hidden" id="emailReportId" name="emailReportId" value="">
                            <input type="hidden" id="formType" name="formType" value="QuickForm">
                            <input type="hidden" name="zx" id="cmpZuid" value="12a65a2b2">
                            <input type="hidden" name="zcvers" value="3.0">
                            <input type="hidden" name="oldListIds" id="allCheckedListIds" value="">
                            <input type="hidden" id="mode" name="mode" value="OptinCreateView">
                            <input type="hidden" id="zcld" name="zcld" value="19453dbc9b1fef3c">
                            <input type="hidden" id="document_domain" value="">
                            <input type="hidden" id="zc_Url" value="cabn.maillist-manage.com">
                            <input type="hidden" id="new_optin_response_in" value="0">
                            <input type="hidden" id="duplicate_optin_response_in" value="0">
                            <input type="hidden" name="zc_trackCode" id="zc_trackCode" value="ZCFORMVIEW">
                            <input type="hidden" id="zc_formIx" name="zc_formIx" value="3e0ded5e28c69bd8d6f856c2bb2c0cc4472676965757f09e">
                            <input type="hidden" id="viewFrom" value="URL_ACTION">
                            <span style="display: none" id="dt_CONTACT_EMAIL">1,true,6,Correo electrónico de contacto,2</span>
                            <span style="display: none" id="dt_FIRSTNAME">1,false,1,Nombre,2</span>
                            <span style="display: none" id="dt_LASTNAME">1,false,1,Apellidos,2</span>
                        </form>
                    </div>
                </div>
            </div>
            <img src="https://cabn.maillist-manage.com/images/spacer.gif" id="refImage" onLoad="referenceSetter(this)" style="display:none;">
        </div>
        <input type="hidden" id="signupFormType" value="QuickForm_Vertical">
        <div id="zcOptinOverLay" oncontextmenu="return false" style="display:none;text-align: center; background-color: rgb(0, 0, 0); opacity: 0.5; z-index: 100; position: fixed; width: 100%; top: 0px; left: 0px; height: 988px;"></div>
        <div id="zcOptinSuccessPopup" style="display:none;z-index: 9999;width: 800px; height: 40%;top: 84px;position: fixed; left: 26%;background-color: #FFFFFF;border-color: #E6E6E6; border-style: solid; border-width: 1px;  box-shadow: 0 1px 10px #424242;padding: 35px;">
            <span style="position: absolute;top: -16px;right:-14px;z-index:99999;cursor: pointer;" id="closeSuccess">
                <img src="https://cabn.maillist-manage.com/images/videoclose.png">
            </span>
            <div id="zcOptinSuccessPanel"></div>
        </div>`;
        const cont = $('#zho-signup-container')
        console.log("extends -> @mediascreenand -> cont", cont)
        cont.append($(html));
    }

    render() {
        return (
            <div id="zho-signup-container"></div>
        )
    }
}