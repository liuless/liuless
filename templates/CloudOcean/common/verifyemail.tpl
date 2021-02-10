<div class="alert alert-success alert-dismissible fade show m-b-10 email-alert-success" role="alert" style="display:none">
  <p class="alert-tips"><a href="javascript" class="alert-link ">{$LANG.emailsendsuccess}</a></p>
  <button type="button" class="close m-t-10" data-dismiss="alert" style="padding:4px 15px;" aria-label="Close">
    <span aria-hidden="true" class="la la-close"></span>
  </button>
</div>

{if $emailVerificationIdValid}
  <div class="alert alert-success alert-dismissible fade show m-b-0" role="alert">
    <p class="alert-tips"><a href="javascript:;" class="alert-link ">{$LANG.emailAddressVerified}</a></p>
    <button type="button" class="close m-t-10" data-dismiss="alert" style="padding:4px 15px;" aria-label="Close">
      <span aria-hidden="true" class="la la-close"></span>
    </button>
  </div>
{elseif $emailVerificationIdValid === false}
  <div class="alert alert-primary alert-dismissible fade show m-b-0 email-top-msg" role="alert" style="display:none">
  		<p class="alert-tips"><a href="javascript:;" class="alert-link">{$LANG.emailKeyExpired}</a><button id="btnResendVerificationEmail" class="float-right btn btn-primary" data-token="{$token}" >{$LANG.resendEmail}</button></p>
  		<button type="button" class="close" data-dismiss="alert" onclick="closeTopMsgBoxEmail()" aria-label="Close">
  			<span aria-hidden="true" class="la la-close"></span>
  		</button>
	</div>
{elseif $emailVerificationPending && !$showingLoginPage}
  <div class="alert alert-primary alert-dismissible fade show m-b-0 email-top-msg" role="alert" style="display:none">
  		<p class="alert-tips"><a href="javascript:;" class="alert-link">{$LANG.verifyEmailAddress}</a><button id="btnResendVerificationEmail"   class="float-right btn btn-primary" data-token="{$token}">{$LANG.resendEmail}</button></p>
  		<button type="button" class="close m-t-10 email-close-btn" onclick="closeTopMsgBoxEmail()" data-dismiss="alert" style="padding:4px 15px;" aria-label="Close">
  			<span aria-hidden="true" class="la la-close"></span>
  		</button>
  	</div>
{/if}

{literal}
	<script type="text/javascript">
    $("#btnResendVerificationEmail").on('click',function(){
      $(this).css("cursor","not-allowed")
      $(this).attr("disabled","disabled")
      var token = $(this).data('token')
      $.post("/clientarea.php",{'action':'resendVerificationEmail','token':token})
      setTimeout(function(){
        $(".email-top-msg").hide()
        $(".email-alert-success").show()
        closeTopMsgBoxEmail()
      },2000)
    })

    $(function(){
      if(!$.cookie("close-top-eamil")){
            $(".email-top-msg").show();
        }
    })

    function closeTopMsgBoxEmail(){
      $.cookie("close-top-eamil", "true", { expires: 1 }); //设置为1天，默认值：浏览器关闭
    }
	</script>
{/literal}
