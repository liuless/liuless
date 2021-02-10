
<nav class="breadcrumb-wrapper" aria-label="breadcrumb">
    <ol class="breadcrumb">
      
        {foreach $breadcrumb as $item}
   
                    <li class="breadcrumb-item {if $item@last}active{/if}">
                                 {if !$item@last}<a href="{$item.link}">{/if}
            {$item.label}
            {if !$item@last}</a>{/if}
                            </li>{/foreach}
            </ol>
</nav>