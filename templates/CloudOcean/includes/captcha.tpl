{if $captcha}
  
        {if $filename == 'index'}
            <div class="domainchecker-homepage-captcha">
        {/if}

        {if $captcha == "recaptcha"}
            <script src="https://www.recaptcha.net/recaptcha/api.js" async defer></script>
           <center> <div id="google-recaptcha-domainchecker" class="g-recaptcha center-block" data-sitekey="{$reCaptchaPublicKey}"></div> </center><br>
        {else}
           <div class="input-group mb-3">
											<div class="input-group-prepend">
												<span class="input-group-text">  <img id="inputCaptchaImage" src="includes/verifyimage.php" align="middle" /></span>
											</div>
											<input class="form-control"id="inputCaptcha" type="text" name="code" maxlength="5" style="height:38px;">
											
										</div>
              


               
             
        {/if}

        {if $filename == 'index'}
            </div>
        {/if}
   
{/if}