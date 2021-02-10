{if $type == 'info'}
	{$color = '

background-color: #399AF2;
    border-color: #399AF2;
    color: #fff;'}
{else if $type == 'success'}
	{$color = 'background-color: #2fbfa0;
    border-color: #2fbfa0;
    color: #fff;
'}
{else if $type == 'error'}
	{$color = 'background-color: #ee4b4b;
    border-color: #ee4b4b;
    color: #fff;'}
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
		<div class="alert  alert-dismissible m-b-10 {$text}" role="alert" style="{$color}">
			<p  style="margin-bottom:0px;"><style>
              li {
    display: list-item;
    text-align: -webkit-match-parent;
                list-style-type:none;
}
            
              </style>{$msg}</p>
			<button type="button" class="close m-t-10" data-dismiss="alert" style="padding:4px 15px;" aria-label="Close">
				<span aria-hidden="true" class="la la-close"></span>
			</button>
		</div>
{/if}
