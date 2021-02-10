<!-- 顶部菜单栏-->

<nav class="top-toolbar navbar navbar-mobile navbar-tablet">
    <ul class="navbar-nav nav-left">
        <li class="nav-item">
            <a href="javascript:void(0)" data-toggle-state="aside-left-open">
                <i class="icon dripicons-align-left"></i>
            </a>
        </li>
    </ul>
    <ul class="navbar-nav nav-center site-logo">
        <li>
            <a href="clientarea.php">
                
                <span class="brand-text">{$companyname}</span>
            </a>
        </li>
    </ul>
    <ul class="navbar-nav nav-right">
        <li class="nav-item">
            <a href="javascript:void(0)" data-toggle-state="mobile-topbar-toggle">
                <i class=" dripicons-dots-3 rotate-90"></i>
            </a>
        </li>
    </ul>
</nav>
<nav class="top-toolbar navbar navbar-desktop flex-nowrap">

    <ul class="navbar-nav nav-right p-r-20">

          <li class="nav-item">
						<a href="javascript:void(0)" class="open-search-button" data-q-action="open-site-search">
							<i class="icon dripicons-search"></i>
						</a>
					</li>
          <li class="nav-item dropdown dropdown-notifications dropdown-menu-lg">
						<a href="javascript:void(0)" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
							<i class="icon dripicons-bell"></i>
						</a>

          
            <div class="dropdown-menu dropdown-menu-right">
                <div class="card card-notification">
                    <div class="card-header">
                        <h5 class="card-title">{$LANG.notifications}</h5>
                       
                    </div>
                    <!-- timeline-primary timeline-accent timeline-success timeline-warning timeline-info -->

                    <div class="card-body">
                        <div class="card-container-wrapper">
                            <div class="card-container h-no m-b-0">
                                <div class="timeline timeline-border">
                                {foreach $clientAlerts as $alert}
                                  <div class="timeline-list timeline-border {if $alert->getSeverity() == 'danger'}timeline-accent{elseif $alert->getSeverity() == 'warning'}timeline-warning{elseif $alert->getSeverity() == 'info'}timeline-info{else}timeline-success{/if}">
                                      <div class="timeline-info">
                                          <div><a href="{$alert->getLink()}">{$alert->getMessage()}</a></div>
                                          <!-- <small class="text-muted">07/07/18, 1:00 PM</small> -->
                                      </div>
                                  </div>

                                {foreachelse}
                                  <div class="timeline-list">
                                      <div class="timeline-info">
                                          <div>{$LANG.notificationsnone}</div>
                                      </div>
                                  </div>
                                {/foreach}
                                </div>
                            </div>
                           
                        </div>
                    </div>
                </div>
            </div>
        </li>

<li class="nav-item dropdown dropdown-menu-lg">
						<a href="javascript:void(0)" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
							<i class="icon dripicons-view-apps"></i>
						</a>
						<div class="dropdown-menu dropdown-menu-right p-0">
							<div class="dropdown-menu-grid">
								<div class="menu-grid-row">
									<div><a class="dropdown-item  border-bottom border-right" href="apps.mail.html"><i class="icon dripicons-mail"></i><span>Mail</span></a></div>
									<div><a class="dropdown-item  border-bottom" href="apps.messages.html"><i class="icon dripicons-message"></i><span>Messages</span></a></div>
								</div>
								<div class="menu-grid-row">
									<div><a class="dropdown-item  border-right" href="apps.contacts.html"><i class="icon dripicons-archive"></i><span>Contacts</span></a></div>
									<div> <a class="dropdown-item" href="apps.calendar.html"><i class="icon dripicons-calendar"></i><span>Calendar</span></a></div>
								</div>
							</div>
						</div>
					</li>

   

      {if $loggedin}
        <li class="nav-item dropdown">
            <a  class="nav-link nav-pill user-avatar" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">
                <img src="/templates/{$template}/assets/img/avatars/1.jpg" class="align-self-center mr-3 w-35 rounded-circle" >
                <!--<p class="f-w-400 p-t-12">{$clientsdetails.fullname}<i class="la la-angle-down"></i></p>-->
            </a>
            <div class="dropdown-menu dropdown-menu-right dropdown-menu-accout">
                <div class="dropdown-header pb-3">
                    <div class="media d-user">
                        <img class="align-self-center mr-3 w-35 rounded-circle" src="/templates/{$template}/assets/img/avatars/1.jpg">
                        <div class="media-body">
                            <h5 class="mt-0 mb-0">{$clientsdetails.fullname}</h5>
                            <span>{$clientsdetails.email}</span>
                        </div>
                    </div>
                </div>
                <a class="dropdown-item" href="{$WEB_ROOT}/clientarea.php?action=details"><i class="icon dripicons-mail"></i> {$LANG.accountinfo} </a>
                <a class="dropdown-item" href="{$WEB_ROOT}/clientarea.php?action=security"><i class="icon dripicons-user"></i> {$LANG.clientareanavsecurity} </a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="{$WEB_ROOT}/clientarea.php?action=changepw"><i class="icon dripicons-lock"></i> {$LANG.clientareachangepassword} </a>
                <a class="dropdown-item" href="{$WEB_ROOT}/clientarea.php?action=emails"><i class="icon dripicons-to-do"></i> {$LANG.navemailssent} </a>
                <a class="dropdown-item" href="logout.php"><i class="icon dripicons-lock-open"></i> {$LANG.clientareanavlogout} </a>
            </div>
        </li>
        {/if}
         <!-- 语言选择 -->
          {if $languagechangeenabled && count($locales) > 1}
        	   <li class="nav-item dropdown dropdown-notifications dropdown-menu-lg">
						<a href="javascript:void(0)" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
							<i class="icon dripicons-align-right"></i>
						</a>
        
              <div class="dropdown-menu dropdown-menu-right " id="languageChooserContent" role="menu">
                {foreach $locales as $locale}
                  <a class="dropdown-item p-t-5 p-b-5" href="{$currentpagelinkback}language={$locale.language}" role="menuitem">
                    <span ></span> {$locale.localisedName}</a>
                {/foreach}
              </div>
            </li>
        {/if}
    </ul>
</nav>
