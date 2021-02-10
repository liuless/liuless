
{if $type == 'info'}
	{$color = 'alert-info'}
{else if $type == 'success'}
	{$color = 'alert-success'}
{else if $type == 'error'}
	{$color = 'alert-danger'}
{else if $type == 'warning'}
	{$color = 'alert-warning'}
{else if $type == 'primary'}
	{$color = 'alert-primary'}
{else}
	{$color = 'alert-success'}
{/if}

{if $textcenter == 'true'}
	{$text = 'text-center'}
{/if}

{if $url != ''}
	{$href = $url}
{else}
	{$href="javascript:;"}
{/if}

{if $msg}
		<div class="alert {$color} alert-dismissible  alert-outline  fade show m-b-10 {$text}" role="alert">
			<p class="alert-tips" style="margin-bottom:0px;"><a href="{$href}" class="alert-link ">{$msg}</a></p>
			<button type="button" class="close m-t-10" data-dismiss="alert" style="padding:4px 15px;" aria-label="Close">
				<span aria-hidden="true" class="la la-close"></span>
			</button>
		</div>
{/if}
