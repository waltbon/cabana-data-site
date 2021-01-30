import React from 'react';
import FormInput from '../ui/inputs/form-input';
import { executePost } from '../../lib/services/base/api-base';

interface IState {
    submitted: boolean,
    data: {
        firstname: string;
        lastname: string;
        email: string;
        message: string;
    },
    errors: {
        firstname: string;
        lastname: string;
        email: string;
        message: string;
    }
};

interface Props {
    // onFormSubmmited: Function
}

export default class extends React.Component<Props, IState> {
    constructor(props) {
        super(props);
        this.state = {
            submitted: false,
            data: {
                firstname: '',
                lastname: '',
                email: '',
                message: '',
            },
            errors: {} as any,
        };
        this.onHandleChange = this.onHandleChange.bind(this);
        this.onHandleSubmit = this.onHandleSubmit.bind(this);
    }

    get formIsValid(): boolean {
        return Object.keys(this.state.errors).length === 0 && this.state.errors.constructor === Object;
    }

    onHandleChange(e) {
        // e.preventDefault();
        const { name, value } = e.target;
        const { data } = this.state;
        data[name] = value;
        this.setState({
            submitted: false,
            data
        });
    }

    async onHandleSubmit(e) {
        e.preventDefault();
        this.checkForm();

        if (!this.formIsValid) {
            return;
        }

        await executePost('/api/contact-us', this.state.data);
        this.setState({
            submitted: true
        })
    }

    checkForm() {
        const { data } = this.state;
        const errors = {} as any;

        if (!data.firstname) {
            errors.firstname = 'Nombre requerido';
        }

        if (!data.lastname) {
            errors.lastname = 'Apellido es requerido';
        }

        if (!data.email) {
            errors.email = 'El correo electrónico es requerido';
        }

        this.setState({
            errors
        });
    }

    getCrmHtml(): string {
        return `
        <!-- Note :
        - You can modify the font style and form style to suit your website. 
        - Code lines with comments Do not remove this code are required for the form to work properly, make sure that you do not remove these lines of code. 
        - The Mandatory check script can modified as to suit your business needs. 
        - It is important that you test the modified form before going live.-->
     <div id='crmWebToEntityForm' class='zcwf_lblLeft crmWebToEntityForm' style='background-color: white;color: black;width: 100%;'>
       <meta name='viewport' content='width=device-width, initial-scale=1.0'>
        <META HTTP-EQUIV ='content-type' CONTENT='text/html;charset=UTF-8'>
        <form action='https://crm.zoho.com/crm/WebToLeadForm' name=WebToLeads4448548000000969005 method='POST' onSubmit='javascript:document.charset="UTF-8"; return checkMandatory4448548000000969005()' accept-charset='UTF-8'>
      <input type='text' style='display:none;' name='xnQsjsdp' value='1f2d8dd9c18b9d4ccb30738c9004c3345b8b2614ef07b3d44c6561ecdfcec918'></input> 
      <input type='hidden' name='zc_gad' id='zc_gad' value=''></input> 
      <input type='text' style='display:none;' name='xmIwtLD' value='2174f34ca5d166091c96137b440c041711b3c3183e8185132363c2ae000bec6a'></input> 
      <input type='text'  style='display:none;' name='actionType' value='TGVhZHM='></input>
      <input type='text' style='display:none;' name='returnURL' value='https://cabanadata.com/contact-us/thank-you' > </input>
          <!-- Do not remove this code. -->
          <input type='text' style='display:none;' id='ldeskuid' name='ldeskuid'></input>
          <input type='text' style='display:none;' id='LDTuvid' name='LDTuvid'></input>
          <!-- Do not remove this code. -->
     <style>
     html,body{
         margin: 0px;
     }
     #crmWebToEntityForm.zcwf_lblLeft {
         width:100%;
         padding: 25px;
         margin: 0 auto;
         box-sizing: border-box;
     }
     #crmWebToEntityForm.zcwf_lblLeft * {
         box-sizing: border-box;
     }
     #crmWebToEntityForm{text-align: left;}
     #crmWebToEntityForm * {
         direction: ltr;
     }
     .zcwf_lblLeft .zcwf_title {
         word-wrap: break-word;
         padding: 0px 2px 10px;
         font-weight: bold;
     }
     .zcwf_lblLeft .zcwf_col_fld input[type=text], .zcwf_lblLeft .zcwf_col_fld textarea {
         
         border: 1px solid #ccc;
         resize: vertical;
         border-radius: 2px;
         float: left;
         height: 45px;
     }
     .zcwf_lblLeft .zcwf_col_lab {
         width: 80%;
         word-break: break-word;
         padding: 0px 2px 0px;
         margin-right: 10px;
         margin-top: 2px;
         float: left;
         min-height: 1px;
     }
     .zcwf_lblLeft .zcwf_col_fld {
         float: left;
         width: 90%;
         padding: 0px 2px 0px;
         position: relative;
         margin-top: 2px;
     }
     .zcwf_lblLeft .zcwf_privacy{padding: 6px;}
     .zcwf_lblLeft .wfrm_fld_dpNn{display: none;}
     .dIB{display: inline-block;}
     .zcwf_lblLeft .zcwf_col_fld_slt {
         width: 60%;
         border: 1px solid #ccc;
         background: #fff;
         border-radius: 4px;
         
         float: left;
         resize: vertical;
     }
     .zcwf_lblLeft .zcwf_row:after, .zcwf_lblLeft .zcwf_col_fld:after {
         content: '';
         display: table;
         clear: both;
     }
     .zcwf_lblLeft .zcwf_col_help {
         float: left;
         margin-left: 7px;
         
         max-width: 35%;
         word-break: break-word;
     }
     .zcwf_lblLeft .zcwf_help_icon {
         cursor: pointer;
         width: 16px;
         height: 16px;
         display: inline-block;
         background: #fff;
         border: 1px solid #ccc;
         color: #ccc;
         text-align: center;
         font-size: 11px;
         line-height: 16px;
         font-weight: bold;
         border-radius: 50%;
     }
     .zcwf_lblLeft .zcwf_row {margin: 5px 0px;}
     .zcwf_lblLeft .formsubmit {
         margin-right: 5px;
         cursor: pointer;
         color: #333;
         
     }
     .zcwf_lblLeft .zcwf_privacy_txt {
         color: rgb(0, 0, 0);
         
         
         display: inline-block;
         vertical-align: top;
         color: #333;
         padding-top: 2px;
         margin-left: 6px;
     }
     .zcwf_lblLeft .zcwf_button {
         
         color: #333;
         border: 1px solid #ccc;
         padding: 3px 9px;
         border-radius: 4px;
         cursor: pointer;
         max-width: 120px;
         overflow: hidden;
         text-overflow: ellipsis;
         white-space: nowrap;
     }
     .zcwf_lblLeft .zcwf_tooltip_over{
         position: relative;
     }
     .zcwf_lblLeft .zcwf_tooltip_ctn{
         position: absolute;
         background: #dedede;
         padding: 3px 6px;
         top: 3px;
         border-radius: 4px;word-break: break-all;
         min-width: 50px;
         max-width: 150px;
         color: #333;
     }
     @media all and (max-width: 600px) {
         .zcwf_lblLeft .zcwf_col_lab, .zcwf_lblLeft .zcwf_col_fld {
             width: auto;
             float: none !important;
         }
         .zcwf_lblLeft .zcwf_col_help {width: 40%;}
     }
     </style>
     <div class='zcwf_row'><div class='zcwf_col_lab' style='font-size:12px; '><label for='First Name'>Nombre<span style='color:red;'>*</span></label></div><div class='zcwf_col_fld'><input type='text' id='First Name' name='First Name' maxlength='40'></input><div class='zcwf_col_help'></div></div></div><div class='zcwf_row'><div class='zcwf_col_lab' style='font-size:12px; '><label for='Last Name'>Apellidos<span style='color:red;'>*</span></label></div><div class='zcwf_col_fld'><input type='text' id='Last Name' name='Last Name' maxlength='80'></input><div class='zcwf_col_help'></div></div></div><div class='zcwf_row'><div class='zcwf_col_lab' style='font-size:12px; '><label for='Email'>Email<span style='color:red;'>*</span></label></div><div class='zcwf_col_fld'><input type='text' ftype='email' id='Email' name='Email' maxlength='100'></input><div class='zcwf_col_help'></div></div></div><div class='zcwf_row'><div class='zcwf_col_lab' style='font-size:12px; '><label for='Company'>Empresa<span style='color:red;'>*</span></label></div><div class='zcwf_col_fld'><input type='text' id='Company' name='Company' maxlength='100'></input><div class='zcwf_col_help'></div></div></div><div class='zcwf_row'><div class='zcwf_col_lab' style='font-size:12px; '><label for='Phone'>Tel&eacute;fono</label></div><div class='zcwf_col_fld'><input type='text' id='Phone' name='Phone' maxlength='30'></input><div class='zcwf_col_help'></div></div></div><div class='zcwf_row'><div class='zcwf_col_lab' style='font-size:12px; '><label for='Description'>Cu&eacute;ntanos sobre tu poryecto</label></div><div class='zcwf_col_fld'><textarea id='Description' name='Description'></textarea><div class='zcwf_col_help'></div></div></div><div class='zcwf_row'><div class='zcwf_col_lab'></div><div class='zcwf_col_fld'><input type='submit' id='formsubmit' class='formsubmit zcwf_button' value='Enviar' title='Enviar'><input type='reset' class='zcwf_button' name='reset' value='Reiniciar ' title='Reiniciar '></div></div>
         <script>
            var mndFileds=new Array('Company','First Name','Last Name','Email');
            var fldLangVal=new Array('Empresa','Nombre','Apellidos','Email'); 
             var name='';
             var email='';
         function validateEmail()
         {
             var emailFld = document.querySelectorAll('[ftype=email]');
             var i;
             for (i = 0; i < emailFld.length; i++)
             {
                 var emailVal = emailFld[i].value;
                 if((emailVal.replace(/^\s+|\s+$/g, '')).length!=0 )
                 {
                     var atpos=emailVal.indexOf('@');
                     var dotpos=emailVal.lastIndexOf('.');
                     if (atpos<1 || dotpos<atpos+2 || dotpos+2>=emailVal.length)
                     {
                         alert('Please enter a valid email address. ');
                         emailFld[i].focus();
                         return false;
                     }
                 }
             }
             return true;
         }
     
            function checkMandatory4448548000000969005() {
             for(i=0;i<mndFileds.length;i++) {
               var fieldObj=document.forms['WebToLeads4448548000000969005'][mndFileds[i]];
               if(fieldObj) {
                 if (((fieldObj.value).replace(/^\s+|\s+$/g, '')).length==0) {
                  if(fieldObj.type =='file')
                     { 
                      alert('Please select a file to upload.'); 
                      fieldObj.focus(); 
                      return false;
                     } 
                 alert(fldLangVal[i] +' cannot be empty.'); 
                           fieldObj.focus();
                           return false;
                 }  else if(fieldObj.nodeName=='SELECT') {
                          if(fieldObj.options[fieldObj.selectedIndex].value=='-None-') {
                     alert(fldLangVal[i] +' cannot be none.'); 
                     fieldObj.focus();
                     return false;
                    }
                 } else if(fieldObj.type =='checkbox'){
                     if(fieldObj.checked == false){
                     alert('Please accept  '+fldLangVal[i]);
                     fieldObj.focus();
                     return false;
                    } 
                  } 
                  try {
                      if(fieldObj.name == 'Last Name') {
                     name = fieldObj.value;
                        }
                 } catch (e) {}
                 }
             }
             trackVisitor();
             if(!validateEmail()){return false;}
             document.querySelector('.crmWebToEntityForm .formsubmit').setAttribute('disabled', true);
         }
     
     function tooltipShow(el){
         var tooltip = el.nextElementSibling;
         var tooltipDisplay = tooltip.style.display;
         if(tooltipDisplay == 'none'){
             var allTooltip = document.getElementsByClassName('zcwf_tooltip_over');
             for(i=0; i<allTooltip.length; i++){
                 allTooltip[i].style.display='none';
             }
             tooltip.style.display = 'block';
         }else{
             tooltip.style.display='none';
         }
     }
     </script><script type='text/javascript' id='VisitorTracking'>var $zoho= $zoho || {};$zoho.salesiq = $zoho.salesiq || {widgetcode:'8304def1b64d117594a6d779a8dd80fb6f671694c304f3ab2ee52af141365500', values:{},ready:function(){$zoho.salesiq.floatbutton.visible('hide');}};var d=document;s=d.createElement('script');s.type='text/javascript';s.id='zsiqscript';s.defer=true;s.src='https://salesiq.zoho.com/widget';t=d.getElementsByTagName('script')[0];t.parentNode.insertBefore(s,t);function trackVisitor(){try{if($zoho){var LDTuvidObj = document.forms['WebToLeads4448548000000969005']['LDTuvid'];if(LDTuvidObj){LDTuvidObj.value = $zoho.salesiq.visitor.uniqueid();}var firstnameObj = document.forms['WebToLeads4448548000000969005']['First Name'];if(firstnameObj){name = firstnameObj.value +' '+name;}$zoho.salesiq.visitor.name(name);var emailObj = document.forms['WebToLeads4448548000000969005']['Email'];if(emailObj){email = emailObj.value;$zoho.salesiq.visitor.email(email);}}} catch(e){}}</script>
         </form>
     </div>`
    }

    render() {
        return (
            <div className="contactform- contact-form-inputs-filled contact-form-button-block">
                {/* <div dangerouslySetInnerHTML={{__html: this.getCrmHtml()}}></div> */}
                <form noValidate onSubmit={this.onHandleSubmit} className={`${this.state.submitted ? 'hidden':''}`}>
                    <div className="row" >
                        <div className="col-sm-12 col-md-12">
                            <FormInput onChange={this.onHandleChange} name="firstname"
                                value={this.state.data.firstname} className="bg-gray text-dark" placeholder="Nombre" label="Nombre" error={this.state.errors.firstname} />
                        </div>
                        <div className="col-sm-12">
                            <FormInput onChange={this.onHandleChange} name="lastname"
                                value={this.state.data.lastname} placeholder="Apellidos" label="Apellidos" error={this.state.errors.lastname} />
                        </div>
                        <div className="col-sm-12">
                            <FormInput onChange={this.onHandleChange} name="email"
                                value={this.state.data.email} placeholder="Correo electrónico" label="Correo electrónico" error={this.state.errors.email} />
                        </div>
                        <div className="col-md-12">
                            <textarea className="px-4 bg-gray text-dark" cols={10} rows={4} name="message" aria-required="true"
                                onChange={this.onHandleChange}
                                aria-invalid="false" placeholder="Cuéntenos aquí de su proyecto" required defaultValue={""} />
                        </div>
                        <div className="col-md-12">
                            <button className="btn btn-success font-size-14 ltr-sp-2" type="submit" >Enviar</button>
                        </div>
                    </div>
                </form>
                <div className="row"  hidden={!this.state.submitted}>
                    <div className="col-sm-12">
                        <h4>Listo {this.state.data.firstname}!</h4>
                        <p className="pb-4">Hemos recibido tu solicitud, nos pondremos en contacto con usted lo más pronto posible</p>
                        <a href="/" className="">Ir a inicio</a>
                    </div>
                </div>
            </div>
        )
    }
}