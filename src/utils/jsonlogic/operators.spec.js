





<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
  <link rel="dns-prefetch" href="https://assets-cdn.github.com">
  <link rel="dns-prefetch" href="https://avatars0.githubusercontent.com">
  <link rel="dns-prefetch" href="https://avatars1.githubusercontent.com">
  <link rel="dns-prefetch" href="https://avatars2.githubusercontent.com">
  <link rel="dns-prefetch" href="https://avatars3.githubusercontent.com">
  <link rel="dns-prefetch" href="https://github-cloud.s3.amazonaws.com">
  <link rel="dns-prefetch" href="https://user-images.githubusercontent.com/">



  <link crossorigin="anonymous" media="all" integrity="sha512-ISsGppDAOaepQ4upEA9mm4sMLKs3V+WJ5yaoGgHBrY13vkDtM37b0Y8Uej1pifaUkAcHJ9kkdxNf48eHtV595g==" rel="stylesheet" href="https://assets-cdn.github.com/assets/frameworks-1a4dd44c32a7f3b22f5ee95cb87b4646.css" />
  <link crossorigin="anonymous" media="all" integrity="sha512-AZiPkC2eIY8yQTwd2GHdf+vGVxhQLPp8zN5HD/+XIxTljkmK532EPMi5J59/RkU8Tx2z7Zhrrp22Ynk0bifnPQ==" rel="stylesheet" href="https://assets-cdn.github.com/assets/github-ef9e6df593c3136722bd837c0437786d.css" />
  
  
  <link crossorigin="anonymous" media="all" integrity="sha512-+G4sIYlb3eQxH1jJoAG/Ed2g3dlNc6jvO89e2RBT0+oVtPJQP4AINvlrwG4w48vGz0HVM7frVoaV1NLEfb6/1A==" rel="stylesheet" href="https://assets-cdn.github.com/assets/site-b4158a9f22ebd9e592779d889c0f9aaf.css" />
  

  <meta name="viewport" content="width=device-width">
  
  <title>formio.js/operators.spec.js at master · formio/formio.js · GitHub</title>
    <meta name="description" content="GitHub is where people build software. More than 27 million people use GitHub to discover, fork, and contribute to over 80 million projects.">
  <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub">
  <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub">
  <meta property="fb:app_id" content="1401488693436528">

    
    <meta property="og:image" content="https://avatars2.githubusercontent.com/u/11790256?s=400&amp;v=4" /><meta property="og:site_name" content="GitHub" /><meta property="og:type" content="object" /><meta property="og:title" content="formio/formio.js" /><meta property="og:url" content="https://github.com/formio/formio.js" /><meta property="og:description" content="formio.js - JavaScript powered forms and SDK for Form.io" />

  <link rel="assets" href="https://assets-cdn.github.com/">
  
  <meta name="pjax-timeout" content="1000">
  
  <meta name="request-id" content="EE07:2C4C:31572CC:5CEBA31:5AF06022" data-pjax-transient>


  

  <meta name="selected-link" value="repo_source" data-pjax-transient>

    <meta name="google-site-verification" content="KT5gs8h0wvaagLKAVWq8bbeNwnZZK1r1XQysX3xurLU">
  <meta name="google-site-verification" content="ZzhVyEFwb7w3e0-uOTltm8Jsck2F5StVihD0exw2fsA">
  <meta name="google-site-verification" content="GXs5KoUUkNCoaAZn7wPN-t01Pywp9M3sEjnt_3_ZWPc">
    <meta name="google-analytics" content="UA-3769691-2">

<meta name="octolytics-host" content="collector.githubapp.com" /><meta name="octolytics-app-id" content="github" /><meta name="octolytics-event-url" content="https://collector.githubapp.com/github-external/browser_event" /><meta name="octolytics-dimension-request_id" content="EE07:2C4C:31572CC:5CEBA31:5AF06022" /><meta name="octolytics-dimension-region_edge" content="iad" /><meta name="octolytics-dimension-region_render" content="iad" />
<meta name="analytics-location" content="/&lt;user-name&gt;/&lt;repo-name&gt;/blob/show" data-pjax-transient="true" />




  <meta class="js-ga-set" name="dimension1" content="Logged Out">


  

      <meta name="hostname" content="github.com">
    <meta name="user-login" content="">

      <meta name="expected-hostname" content="github.com">
    <meta name="js-proxy-site-detection-payload" content="OTdjYWI3NTVhMzhhNTU0Zjg0MTczY2YxNTgwOWVjZjhhMDRlMWI5MGY2MWNlNDU3MzU1YmYyMmJmZTVlMzA5MXx7InJlbW90ZV9hZGRyZXNzIjoiNDcuMjA2LjQ3LjEyMiIsInJlcXVlc3RfaWQiOiJFRTA3OjJDNEM6MzE1NzJDQzo1Q0VCQTMxOjVBRjA2MDIyIiwidGltZXN0YW1wIjoxNTI1NzAyNjkwLCJob3N0IjoiZ2l0aHViLmNvbSJ9">

    <meta name="enabled-features" content="UNIVERSE_BANNER,FREE_TRIALS,MARKETPLACE_INSIGHTS,MARKETPLACE_SELF_SERVE,MARKETPLACE_FREE_APPS,MARKETPLACE_INSIGHTS_CONVERSION_PERCENTAGES">

  <meta name="html-safe-nonce" content="5be72e7d933d054d1d9850d18160cbb3c5f959fb">

  <meta http-equiv="x-pjax-version" content="0b936d7bdd1cc0abb9327d66d996e1e8">
  

      <link href="https://github.com/formio/formio.js/commits/master.atom" rel="alternate" title="Recent Commits to formio.js:master" type="application/atom+xml">

  <meta name="description" content="formio.js - JavaScript powered forms and SDK for Form.io">
  <meta name="go-import" content="github.com/formio/formio.js git https://github.com/formio/formio.js.git">

  <meta name="octolytics-dimension-user_id" content="11790256" /><meta name="octolytics-dimension-user_login" content="formio" /><meta name="octolytics-dimension-repository_id" content="43029270" /><meta name="octolytics-dimension-repository_nwo" content="formio/formio.js" /><meta name="octolytics-dimension-repository_public" content="true" /><meta name="octolytics-dimension-repository_is_fork" content="false" /><meta name="octolytics-dimension-repository_network_root_id" content="43029270" /><meta name="octolytics-dimension-repository_network_root_nwo" content="formio/formio.js" /><meta name="octolytics-dimension-repository_explore_github_marketplace_ci_cta_shown" content="false" />


    <link rel="canonical" href="https://github.com/formio/formio.js/blob/master/src/utils/jsonlogic/operators.spec.js" data-pjax-transient>


  <meta name="browser-stats-url" content="https://api.github.com/_private/browser/stats">

  <meta name="browser-errors-url" content="https://api.github.com/_private/browser/errors">

  <link rel="mask-icon" href="https://assets-cdn.github.com/pinned-octocat.svg" color="#000000">
  <link rel="icon" type="image/x-icon" class="js-site-favicon" href="https://assets-cdn.github.com/favicon.ico">

<meta name="theme-color" content="#1e2327">



<link rel="manifest" href="/manifest.json" crossOrigin="use-credentials">

  </head>

  <body class="logged-out env-production page-blob">
    

  <div class="position-relative js-header-wrapper ">
    <a href="#start-of-content" tabindex="1" class="px-2 py-4 bg-blue text-white show-on-focus js-skip-to-content">Skip to content</a>
    <div id="js-pjax-loader-bar" class="pjax-loader-bar"><div class="progress"></div></div>

    
    
    



        <header class="Header header-logged-out  position-relative f4 py-3" role="banner">
  <div class="container-lg d-flex px-3">
    <div class="d-flex flex-justify-between flex-items-center">
      <a class="header-logo-invertocat my-0" href="https://github.com/" aria-label="Homepage" data-ga-click="(Logged out) Header, go to homepage, icon:logo-wordmark">
        <svg height="32" class="octicon octicon-mark-github" viewBox="0 0 16 16" version="1.1" width="32" aria-hidden="true"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"/></svg>
      </a>

    </div>

    <div class="HeaderMenu HeaderMenu--bright d-flex flex-justify-between flex-auto">
        <nav class="mt-0">
          <ul class="d-flex list-style-none">
              <li class="ml-2">
                <a class="js-selected-navigation-item HeaderNavlink px-0 py-2 m-0" data-ga-click="Header, click, Nav menu - item:features" data-selected-links="/features /features/project-management /features/code-review /features/project-management /features/integrations /features" href="/features">
                  Features
</a>              </li>
              <li class="ml-4">
                <a class="js-selected-navigation-item HeaderNavlink px-0 py-2 m-0" data-ga-click="Header, click, Nav menu - item:business" data-selected-links="/business /business/security /business/customers /business" href="/business">
                  Business
</a>              </li>

              <li class="ml-4">
                <a class="js-selected-navigation-item HeaderNavlink px-0 py-2 m-0" data-ga-click="Header, click, Nav menu - item:explore" data-selected-links="/explore /trending /trending/developers /integrations /integrations/feature/code /integrations/feature/collaborate /integrations/feature/ship showcases showcases_search showcases_landing /explore" href="/explore">
                  Explore
</a>              </li>

              <li class="ml-4">
                    <a class="js-selected-navigation-item HeaderNavlink px-0 py-2 m-0" data-ga-click="Header, click, Nav menu - item:marketplace" data-selected-links=" /marketplace" href="/marketplace">
                      Marketplace
</a>              </li>
              <li class="ml-4">
                <a class="js-selected-navigation-item HeaderNavlink px-0 py-2 m-0" data-ga-click="Header, click, Nav menu - item:pricing" data-selected-links="/pricing /pricing/developer /pricing/team /pricing/business-hosted /pricing/business-enterprise /pricing" href="/pricing">
                  Pricing
</a>              </li>
          </ul>
        </nav>

      <div class="d-flex">
          <div class="d-lg-flex flex-items-center mr-3">
            <div class="header-search scoped-search site-scoped-search js-site-search" role="search">
  <!-- '"` --><!-- </textarea></xmp> --></option></form><form class="js-site-search-form" data-scope-type="Repository" data-scope-id="43029270" data-scoped-search-url="/formio/formio.js/search" data-unscoped-search-url="/search" action="/formio/formio.js/search" accept-charset="UTF-8" method="get"><input name="utf8" type="hidden" value="&#x2713;" />
    <label class="form-control header-search-wrapper  js-chromeless-input-container">
          <a class="header-search-scope no-underline" href="/formio/formio.js/blob/master/src/utils/jsonlogic/operators.spec.js">This repository</a>
      <input type="text"
        class="form-control header-search-input  js-site-search-focus js-site-search-field is-clearable"
        data-hotkey="s,/"
        name="q"
        value=""
        placeholder="Search"
        aria-label="Search this repository"
        data-unscoped-placeholder="Search GitHub"
        data-scoped-placeholder="Search"
        autocapitalize="off"
        >
        <input type="hidden" class="js-site-search-type-field" name="type" >
    </label>
</form></div>

          </div>

        <span class="d-inline-block">
            <div class="HeaderNavlink px-0 py-2 m-0">
              <a class="text-bold text-white no-underline" href="/login?return_to=%2Fformio%2Fformio.js%2Fblob%2Fmaster%2Fsrc%2Futils%2Fjsonlogic%2Foperators.spec.js" data-ga-click="(Logged out) Header, clicked Sign in, text:sign-in">Sign in</a>
                <span class="text-gray">or</span>
                <a class="text-bold text-white no-underline" href="/join?source=header-repo" data-ga-click="(Logged out) Header, clicked Sign up, text:sign-up">Sign up</a>
            </div>
        </span>
      </div>
    </div>
  </div>
</header>

  </div>

  <div id="start-of-content" class="show-on-focus"></div>

    <div id="js-flash-container">
</div>



  <div role="main" class="application-main ">
        <div itemscope itemtype="http://schema.org/SoftwareSourceCode" class="">
    <div id="js-repo-pjax-container" data-pjax-container >
      





  



  <div class="pagehead repohead instapaper_ignore readability-menu experiment-repo-nav  ">
    <div class="repohead-details-container clearfix container">

      <ul class="pagehead-actions">
  <li>
      <a href="/login?return_to=%2Fformio%2Fformio.js"
    class="btn btn-sm btn-with-count tooltipped tooltipped-n"
    aria-label="You must be signed in to watch a repository" rel="nofollow">
    <svg class="octicon octicon-eye" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M8.06 2C3 2 0 8 0 8s3 6 8.06 6C13 14 16 8 16 8s-3-6-7.94-6zM8 12c-2.2 0-4-1.78-4-4 0-2.2 1.8-4 4-4 2.22 0 4 1.8 4 4 0 2.22-1.78 4-4 4zm2-4c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2 0-1.11.89-2 2-2 1.11 0 2 .89 2 2z"/></svg>
    Watch
  </a>
  <a class="social-count" href="/formio/formio.js/watchers"
     aria-label="34 users are watching this repository">
    34
  </a>

  </li>

  <li>
      <a href="/login?return_to=%2Fformio%2Fformio.js"
    class="btn btn-sm btn-with-count tooltipped tooltipped-n"
    aria-label="You must be signed in to star a repository" rel="nofollow">
    <svg class="octicon octicon-star" viewBox="0 0 14 16" version="1.1" width="14" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74z"/></svg>
    Star
  </a>

    <a class="social-count js-social-count" href="/formio/formio.js/stargazers"
      aria-label="74 users starred this repository">
      74
    </a>

  </li>

  <li>
      <a href="/login?return_to=%2Fformio%2Fformio.js"
        class="btn btn-sm btn-with-count tooltipped tooltipped-n"
        aria-label="You must be signed in to fork a repository" rel="nofollow">
        <svg class="octicon octicon-repo-forked" viewBox="0 0 10 16" version="1.1" width="10" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M8 1a1.993 1.993 0 0 0-1 3.72V6L5 8 3 6V4.72A1.993 1.993 0 0 0 2 1a1.993 1.993 0 0 0-1 3.72V6.5l3 3v1.78A1.993 1.993 0 0 0 5 15a1.993 1.993 0 0 0 1-3.72V9.5l3-3V4.72A1.993 1.993 0 0 0 8 1zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3 10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3-10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"/></svg>
        Fork
      </a>

    <a href="/formio/formio.js/network" class="social-count"
       aria-label="75 users forked this repository">
      75
    </a>
  </li>
</ul>

      <h1 class="public ">
  <svg class="octicon octicon-repo" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z"/></svg>
  <span class="author" itemprop="author"><a class="url fn" rel="author" href="/formio">formio</a></span><!--
--><span class="path-divider">/</span><!--
--><strong itemprop="name"><a data-pjax="#js-repo-pjax-container" href="/formio/formio.js">formio.js</a></strong>

</h1>

    </div>
    
<nav class="reponav js-repo-nav js-sidenav-container-pjax container"
     itemscope
     itemtype="http://schema.org/BreadcrumbList"
     role="navigation"
     data-pjax="#js-repo-pjax-container">

  <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
    <a class="js-selected-navigation-item selected reponav-item" itemprop="url" data-hotkey="g c" data-selected-links="repo_source repo_downloads repo_commits repo_releases repo_tags repo_branches repo_packages /formio/formio.js" href="/formio/formio.js">
      <svg class="octicon octicon-code" viewBox="0 0 14 16" version="1.1" width="14" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M9.5 3L8 4.5 11.5 8 8 11.5 9.5 13 14 8 9.5 3zm-5 0L0 8l4.5 5L6 11.5 2.5 8 6 4.5 4.5 3z"/></svg>
      <span itemprop="name">Code</span>
      <meta itemprop="position" content="1">
</a>  </span>

    <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
      <a itemprop="url" data-hotkey="g i" class="js-selected-navigation-item reponav-item" data-selected-links="repo_issues repo_labels repo_milestones /formio/formio.js/issues" href="/formio/formio.js/issues">
        <svg class="octicon octicon-issue-opened" viewBox="0 0 14 16" version="1.1" width="14" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"/></svg>
        <span itemprop="name">Issues</span>
        <span class="Counter">50</span>
        <meta itemprop="position" content="2">
</a>    </span>

  <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
    <a data-hotkey="g p" itemprop="url" class="js-selected-navigation-item reponav-item" data-selected-links="repo_pulls checks /formio/formio.js/pulls" href="/formio/formio.js/pulls">
      <svg class="octicon octicon-git-pull-request" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M11 11.28V5c-.03-.78-.34-1.47-.94-2.06C9.46 2.35 8.78 2.03 8 2H7V0L4 3l3 3V4h1c.27.02.48.11.69.31.21.2.3.42.31.69v6.28A1.993 1.993 0 0 0 10 15a1.993 1.993 0 0 0 1-3.72zm-1 2.92c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zM4 3c0-1.11-.89-2-2-2a1.993 1.993 0 0 0-1 3.72v6.56A1.993 1.993 0 0 0 2 15a1.993 1.993 0 0 0 1-3.72V4.72c.59-.34 1-.98 1-1.72zm-.8 10c0 .66-.55 1.2-1.2 1.2-.65 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"/></svg>
      <span itemprop="name">Pull requests</span>
      <span class="Counter">5</span>
      <meta itemprop="position" content="3">
</a>  </span>

    <a data-hotkey="g b" class="js-selected-navigation-item reponav-item" data-selected-links="repo_projects new_repo_project repo_project /formio/formio.js/projects" href="/formio/formio.js/projects">
      <svg class="octicon octicon-project" viewBox="0 0 15 16" version="1.1" width="15" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M10 12h3V2h-3v10zm-4-2h3V2H6v8zm-4 4h3V2H2v12zm-1 1h13V1H1v14zM14 0H1a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h13a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1z"/></svg>
      Projects
      <span class="Counter" >0</span>
</a>
    <a class="js-selected-navigation-item reponav-item" data-hotkey="g w" data-selected-links="repo_wiki /formio/formio.js/wiki" href="/formio/formio.js/wiki">
      <svg class="octicon octicon-book" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M3 5h4v1H3V5zm0 3h4V7H3v1zm0 2h4V9H3v1zm11-5h-4v1h4V5zm0 2h-4v1h4V7zm0 2h-4v1h4V9zm2-6v9c0 .55-.45 1-1 1H9.5l-1 1-1-1H2c-.55 0-1-.45-1-1V3c0-.55.45-1 1-1h5.5l1 1 1-1H15c.55 0 1 .45 1 1zm-8 .5L7.5 3H2v9h6V3.5zm7-.5H9.5l-.5.5V12h6V3z"/></svg>
      Wiki
</a>

  <a class="js-selected-navigation-item reponav-item" data-selected-links="repo_graphs repo_contributors dependency_graph pulse /formio/formio.js/pulse" href="/formio/formio.js/pulse">
    <svg class="octicon octicon-graph" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M16 14v1H0V0h1v14h15zM5 13H3V8h2v5zm4 0H7V3h2v10zm4 0h-2V6h2v7z"/></svg>
    Insights
</a>

</nav>


  </div>

<div class="container new-discussion-timeline experiment-repo-nav  ">
  <div class="repository-content ">

    
  <a class="d-none js-permalink-shortcut" data-hotkey="y" href="/formio/formio.js/blob/9f39f138a67e70d88d7540e1d330b0ceb2ab01b4/src/utils/jsonlogic/operators.spec.js">Permalink</a>

  <!-- blob contrib key: blob_contributors:v21:48d5bd3a153292b4129a08c165f85061 -->

  <div class="file-navigation">
    
<div class="select-menu branch-select-menu js-menu-container js-select-menu float-left">
  <button class=" btn btn-sm select-menu-button js-menu-target css-truncate" data-hotkey="w"
    
    type="button" aria-label="Switch branches or tags" aria-expanded="false" aria-haspopup="true">
      <i>Branch:</i>
      <span class="js-select-button css-truncate-target">master</span>
  </button>

  <div class="select-menu-modal-holder js-menu-content js-navigation-container" data-pjax>

    <div class="select-menu-modal">
      <div class="select-menu-header">
        <svg class="octicon octicon-x js-menu-close" role="img" aria-label="Close" viewBox="0 0 12 16" version="1.1" width="12" height="16"><path fill-rule="evenodd" d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48z"/></svg>
        <span class="select-menu-title">Switch branches/tags</span>
      </div>

      <div class="select-menu-filters">
        <div class="select-menu-text-filter">
          <input type="text" aria-label="Filter branches/tags" id="context-commitish-filter-field" class="form-control js-filterable-field js-navigation-enable" placeholder="Filter branches/tags">
        </div>
        <div class="select-menu-tabs">
          <ul>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="branches" data-filter-placeholder="Filter branches/tags" class="js-select-menu-tab" role="tab">Branches</a>
            </li>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="tags" data-filter-placeholder="Find a tag…" class="js-select-menu-tab" role="tab">Tags</a>
            </li>
          </ul>
        </div>
      </div>

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="branches" role="menu">

        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/formio/formio.js/blob/1.x/src/utils/jsonlogic/operators.spec.js"
               data-name="1.x"
               data-skip-pjax="true"
               rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                1.x
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/formio/formio.js/blob/2.x/src/utils/jsonlogic/operators.spec.js"
               data-name="2.x"
               data-skip-pjax="true"
               rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                2.x
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/formio/formio.js/blob/FOR-978/src/utils/jsonlogic/operators.spec.js"
               data-name="FOR-978"
               data-skip-pjax="true"
               rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                FOR-978
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/formio/formio.js/blob/FOR-981/src/utils/jsonlogic/operators.spec.js"
               data-name="FOR-981"
               data-skip-pjax="true"
               rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                FOR-981
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/formio/formio.js/blob/add-array-search/src/utils/jsonlogic/operators.spec.js"
               data-name="add-array-search"
               data-skip-pjax="true"
               rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                add-array-search
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/formio/formio.js/blob/add-more-form-control/src/utils/jsonlogic/operators.spec.js"
               data-name="add-more-form-control"
               data-skip-pjax="true"
               rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                add-more-form-control
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/formio/formio.js/blob/add-submission-on-update/src/utils/jsonlogic/operators.spec.js"
               data-name="add-submission-on-update"
               data-skip-pjax="true"
               rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                add-submission-on-update
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/formio/formio.js/blob/added-app-url-support/src/utils/jsonlogic/operators.spec.js"
               data-name="added-app-url-support"
               data-skip-pjax="true"
               rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                added-app-url-support
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/formio/formio.js/blob/added-clear-on-reset-select/src/utils/jsonlogic/operators.spec.js"
               data-name="added-clear-on-reset-select"
               data-skip-pjax="true"
               rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                added-clear-on-reset-select
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/formio/formio.js/blob/added-component-registry/src/utils/jsonlogic/operators.spec.js"
               data-name="added-component-registry"
               data-skip-pjax="true"
               rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                added-component-registry
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/formio/formio.js/blob/added-conditional-wizards/src/utils/jsonlogic/operators.spec.js"
               data-name="added-conditional-wizards"
               data-skip-pjax="true"
               rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                added-conditional-wizards
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/formio/formio.js/blob/added-error-labels/src/utils/jsonlogic/operators.spec.js"
               data-name="added-error-labels"
               data-skip-pjax="true"
               rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                added-error-labels
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/formio/formio.js/blob/added-find-components-utility/src/utils/jsonlogic/operators.spec.js"
               data-name="added-find-components-utility"
               data-skip-pjax="true"
               rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                added-find-components-utility
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/formio/formio.js/blob/added-form-factory/src/utils/jsonlogic/operators.spec.js"
               data-name="added-form-factory"
               data-skip-pjax="true"
               rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                added-form-factory
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/formio/formio.js/blob/added-homepage/src/utils/jsonlogic/operators.spec.js"
               data-name="added-homepage"
               data-skip-pjax="true"
               rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                added-homepage
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/formio/formio.js/blob/added-html5-select-dropdown/src/utils/jsonlogic/operators.spec.js"
               data-name="added-html5-select-dropdown"
               data-skip-pjax="true"
               rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                added-html5-select-dropdown
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/formio/formio.js/blob/added-json-logic/src/utils/jsonlogic/operators.spec.js"
               data-name="added-json-logic"
               data-skip-pjax="true"
               rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                added-json-logic
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/formio/formio.js/blob/added-parent-references/src/utils/jsonlogic/operators.spec.js"
               data-name="added-parent-references"
               data-skip-pjax="true"
               rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                added-parent-references
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/formio/formio.js/blob/added-resize-to-signature/src/utils/jsonlogic/operators.spec.js"
               data-name="added-resize-to-signature"
               data-skip-pjax="true"
               rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                added-resize-to-signature
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/formio/formio.js/blob/added-temp-token-accessor/src/utils/jsonlogic/operators.spec.js"
               data-name="added-temp-token-accessor"
               data-skip-pjax="true"
               rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                added-temp-token-accessor
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/formio/formio.js/blob/added-wysiwyg-editor/src/utils/jsonlogic/operators.spec.js"
               data-name="added-wysiwyg-editor"
               data-skip-pjax="true"
               rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                added-wysiwyg-editor
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/formio/formio.js/blob/adding-core-renderer/src/utils/jsonlogic/operators.spec.js"
               data-name="adding-core-renderer"
               data-skip-pjax="true"
               rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                adding-core-renderer
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/formio/formio.js/blob/adding-custom-classes/src/utils/jsonlogic/operators.spec.js"
               data-name="adding-custom-classes"
               data-skip-pjax="true"
               rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                adding-custom-classes
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/formio/formio.js/blob/adding-descriptions/src/utils/jsonlogic/operators.spec.js"
               data-name="adding-descriptions"
               data-skip-pjax="true"
               rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                adding-descriptions
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/formio/formio.js/blob/adding-docs/src/utils/jsonlogic/operators.spec.js"
               data-name="adding-docs"
               data-skip-pjax="true"
               rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                adding-docs
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/formio/formio.js/blob/adding-factory-build/src/utils/jsonlogic/operators.spec.js"
               data-name="adding-factory-build"
               data-skip-pjax="true"
               rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                adding-factory-build
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/formio/formio.js/blob/adding-wizard/src/utils/jsonlogic/operators.spec.js"
               data-name="adding-wizard"
               data-skip-pjax="true"
               rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                adding-wizard
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/formio/formio.js/blob/allow-alternate-formio-statics/src/utils/jsonlogic/operators.spec.js"
               data-name="allow-alternate-formio-statics"
               data-skip-pjax="true"
               rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                allow-alternate-formio-statics
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/formio/formio.js/blob/attach-to-html-form/src/utils/jsonlogic/operators.spec.js"
               data-name="attach-to-html-form"
               data-skip-pjax="true"
               rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                attach-to-html-form
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/formio/formio.js/blob/better-placeholder-select-support/src/utils/jsonlogic/operators.spec.js"
               data-name="better-placeholder-select-support"
               data-skip-pjax="true"
               rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                better-placeholder-select-support
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/formio/formio.js/blob/bootstrap-4-support/src/utils/jsonlogic/operators.spec.js"
               data-name="bootstrap-4-support"
               data-skip-pjax="true"
               rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                bootstrap-4-support
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/formio/formio.js/blob/bugfix/FA-503-successful-text-response/src/utils/jsonlogic/operators.spec.js"
               data-name="bugfix/FA-503-successful-text-response"
               data-skip-pjax="true"
               rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                bugfix/FA-503-successful-text-response
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/formio/formio.js/blob/bugfix/FOR-977/src/utils/jsonlogic/operators.spec.js"
               data-name="bugfix/FOR-977"
               data-skip-pjax="true"
               rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                bugfix/FOR-977
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/formio/formio.js/blob/bugfix/add-documentation/src/utils/jsonlogic/operators.spec.js"
               data-name="bugfix/add-documentation"
               data-skip-pjax="true"
               rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                bugfix/add-documentation
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/formio/formio.js/blob/bugfix/add-row/src/utils/jsonlogic/operators.spec.js"
               data-name="bugfix/add-row"
               data-skip-pjax="true"
               rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                bugfix/add-row
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/formio/formio.js/blob/bugfix/anonymous-files/src/utils/jsonlogic/operators.spec.js"
               data-name="bugfix/anonymous-files"
               data-skip-pjax="true"
               rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                bugfix/anonymous-files
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/formio/formio.js/blob/bugfix/button-style/src/utils/jsonlogic/operators.spec.js"
               data-name="bugfix/button-style"
               data-skip-pjax="true"
               rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                bugfix/button-style
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/formio/formio.js/blob/bugfix/cached-currentuser-plugin/src/utils/jsonlogic/operators.spec.js"
               data-name="bugfix/cached-currentuser-plugin"
               data-skip-pjax="true"
               rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                bugfix/cached-currentuser-plugin
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/formio/formio.js/blob/bugfix/checkbox-radio/src/utils/jsonlogic/operators.spec.js"
               data-name="bugfix/checkbox-radio"
               data-skip-pjax="true"
               rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                bugfix/checkbox-radio
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/formio/formio.js/blob/bugfix/choices/src/utils/jsonlogic/operators.spec.js"
               data-name="bugfix/choices"
               data-skip-pjax="true"
               rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                bugfix/choices
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/formio/formio.js/blob/bugfix/clear-on-hide/src/utils/jsonlogic/operators.spec.js"
               data-name="bugfix/clear-on-hide"
               data-skip-pjax="true"
               rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                bugfix/clear-on-hide
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/formio/formio.js/blob/bugfix/cond-perf/src/utils/jsonlogic/operators.spec.js"
               data-name="bugfix/cond-perf"
               data-skip-pjax="true"
               rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                bugfix/cond-perf
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/formio/formio.js/blob/bugfix/container-validation/src/utils/jsonlogic/operators.spec.js"
               data-name="bugfix/container-validation"
               data-skip-pjax="true"
               rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                bugfix/container-validation
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/formio/formio.js/blob/bugfix/cookie-fallback/src/utils/jsonlogic/operators.spec.js"
               data-name="bugfix/cookie-fallback"
               data-skip-pjax="true"
               rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                bugfix/cookie-fallback
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/formio/formio.js/blob/bugfix/customClass/src/utils/jsonlogic/operators.spec.js"
               data-name="bugfix/customClass"
               data-skip-pjax="true"
               rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                bugfix/customClass
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/formio/formio.js/blob/bugfix/customEvent/src/utils/jsonlogic/operators.spec.js"
               data-name="bugfix/customEvent"
               data-skip-pjax="true"
               rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                bugfix/customEvent
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/formio/formio.js/blob/bugfix/datagrid-conditions/src/utils/jsonlogic/operators.spec.js"
               data-name="bugfix/datagrid-conditions"
               data-skip-pjax="true"
               rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                bugfix/datagrid-conditions
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/formio/formio.js/blob/bugfix/datetime-min-max-date/src/utils/jsonlogic/operators.spec.js"
               data-name="bugfix/datetime-min-max-date"
               data-skip-pjax="true"
               rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                bugfix/datetime-min-max-date
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/formio/formio.js/blob/bugfix/day/src/utils/jsonlogic/operators.spec.js"
               data-name="bugfix/day"
               data-skip-pjax="true"
               rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                bugfix/day
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/formio/formio.js/blob/bugfix/default/src/utils/jsonlogic/operators.spec.js"
               data-name="bugfix/default"
               data-skip-pjax="true"
               rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                bugfix/default
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/formio/formio.js/blob/bugfix/destroy/src/utils/jsonlogic/operators.spec.js"
               data-name="bugfix/destroy"
               data-skip-pjax="true"
               rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                bugfix/destroy
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/formio/formio.js/blob/bugfix/disabled-fields/src/utils/jsonlogic/operators.spec.js"
               data-name="bugfix/disabled-fields"
               data-skip-pjax="true"
               rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                bugfix/disabled-fields
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/formio/formio.js/blob/bugfix/disabled-revisions/src/utils/jsonlogic/operators.spec.js"
               data-name="bugfix/disabled-revisions"
               data-skip-pjax="true"
               rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                bugfix/disabled-revisions
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/formio/formio.js/blob/bugfix/dropbox-download/src/utils/jsonlogic/operators.spec.js"
               data-name="bugfix/dropbox-download"
               data-skip-pjax="true"
               rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                bugfix/dropbox-download
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/formio/formio.js/blob/bugfix/editgrid-datagrid-improvements/src/utils/jsonlogic/operators.spec.js"
               data-name="bugfix/editgrid-datagrid-improvements"
               data-skip-pjax="true"
               rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                bugfix/editgrid-datagrid-improvements
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/formio/formio.js/blob/bugfix/editgrid/src/utils/jsonlogic/operators.spec.js"
               data-name="bugfix/editgrid"
               data-skip-pjax="true"
               rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                bugfix/editgrid
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/formio/formio.js/blob/bugfix/empty-file/src/utils/jsonlogic/operators.spec.js"
               data-name="bugfix/empty-file"
               data-skip-pjax="true"
               rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                bugfix/empty-file
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/formio/formio.js/blob/bugfix/error-reject/src/utils/jsonlogic/operators.spec.js"
               data-name="bugfix/error-reject"
               data-skip-pjax="true"
               rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                bugfix/error-reject
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/formio/formio.js/blob/bugfix/factory/src/utils/jsonlogic/operators.spec.js"
               data-name="bugfix/factory"
               data-skip-pjax="true"
               rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                bugfix/factory
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/formio/formio.js/blob/bugfix/fetch-server-error/src/utils/jsonlogic/operators.spec.js"
               data-name="bugfix/fetch-server-error"
               data-skip-pjax="true"
               rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                bugfix/fetch-server-error
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/formio/formio.js/blob/bugfix/file-inside-datagrid-/src/utils/jsonlogic/operators.spec.js"
               data-name="bugfix/file-inside-datagrid-"
               data-skip-pjax="true"
               rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                bugfix/file-inside-datagrid-
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/formio/formio.js/blob/bugfix/file-read-only/src/utils/jsonlogic/operators.spec.js"
               data-name="bugfix/file-read-only"
               data-skip-pjax="true"
               rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                bugfix/file-read-only
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/formio/formio.js/blob/bugfix/fix-request-promise/src/utils/jsonlogic/operators.spec.js"
               data-name="bugfix/fix-request-promise"
               data-skip-pjax="true"
               rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                bugfix/fix-request-promise
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/formio/formio.js/blob/bugfix/for-611/src/utils/jsonlogic/operators.spec.js"
               data-name="bugfix/for-611"
               data-skip-pjax="true"
               rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                bugfix/for-611
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/formio/formio.js/blob/bugfix/for-652/src/utils/jsonlogic/operators.spec.js"
               data-name="bugfix/for-652"
               data-skip-pjax="true"
               rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                bugfix/for-652
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/formio/formio.js/blob/bugfix/for-684/src/utils/jsonlogic/operators.spec.js"
               data-name="bugfix/for-684"
               data-skip-pjax="true"
               rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                bugfix/for-684
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/formio/formio.js/blob/bugfix/for-724/src/utils/jsonlogic/operators.spec.js"
               data-name="bugfix/for-724"
               data-skip-pjax="true"
               rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                bugfix/for-724
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/formio/formio.js/blob/bugfix/for-731-html5-select-with-custom-values/src/utils/jsonlogic/operators.spec.js"
               data-name="bugfix/for-731-html5-select-with-custom-values"
               data-skip-pjax="true"
               rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                bugfix/for-731-html5-select-with-custom-values
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/formio/formio.js/blob/bugfix/for-777-viewashtml-fix/src/utils/jsonlogic/operators.spec.js"
               data-name="bugfix/for-777-viewashtml-fix"
               data-skip-pjax="true"
               rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                bugfix/for-777-viewashtml-fix
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/formio/formio.js/blob/bugfix/for-791/src/utils/jsonlogic/operators.spec.js"
               data-name="bugfix/for-791"
               data-skip-pjax="true"
               rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                bugfix/for-791
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/formio/formio.js/blob/bugfix/for-867-astericks-for-required-field/src/utils/jsonlogic/operators.spec.js"
               data-name="bugfix/for-867-astericks-for-required-field"
               data-skip-pjax="true"
               rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                bugfix/for-867-astericks-for-required-field
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/formio/formio.js/blob/bugfix/for-867-required-mark-gets-hidden-with-label/src/utils/jsonlogic/operators.spec.js"
               data-name="bugfix/for-867-required-mark-gets-hidden-with-label"
               data-skip-pjax="true"
               rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                bugfix/for-867-required-mark-gets-hidden-with-label
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/formio/formio.js/blob/bugfix/for-923-incorrect-requests-order/src/utils/jsonlogic/operators.spec.js"
               data-name="bugfix/for-923-incorrect-requests-order"
               data-skip-pjax="true"
               rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                bugfix/for-923-incorrect-requests-order
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/formio/formio.js/blob/bugfix/for-930-search-in-select-resource/src/utils/jsonlogic/operators.spec.js"
               data-name="bugfix/for-930-search-in-select-resource"
               data-skip-pjax="true"
               rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                bugfix/for-930-search-in-select-resource
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/formio/formio.js/blob/bugfix/for-937-datagrid-merge-submission/src/utils/jsonlogic/operators.spec.js"
               data-name="bugfix/for-937-datagrid-merge-submission"
               data-skip-pjax="true"
               rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                bugfix/for-937-datagrid-merge-submission
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/formio/formio.js/blob/bugfix/for-950-input-mask-validation/src/utils/jsonlogic/operators.spec.js"
               data-name="bugfix/for-950-input-mask-validation"
               data-skip-pjax="true"
               rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                bugfix/for-950-input-mask-validation
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/formio/formio.js/blob/bugfix/for-951-datetime-export/src/utils/jsonlogic/operators.spec.js"
               data-name="bugfix/for-951-datetime-export"
               data-skip-pjax="true"
               rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                bugfix/for-951-datetime-export
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/formio/formio.js/blob/bugfix/for-969-number-commas/src/utils/jsonlogic/operators.spec.js"
               data-name="bugfix/for-969-number-commas"
               data-skip-pjax="true"
               rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                bugfix/for-969-number-commas
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/formio/formio.js/blob/bugfix/for-1042-components-as-string/src/utils/jsonlogic/operators.spec.js"
               data-name="bugfix/for-1042-components-as-string"
               data-skip-pjax="true"
               rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                bugfix/for-1042-components-as-string
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/formio/formio.js/blob/bugfix/for-1076-datagrid-min-max/src/utils/jsonlogic/operators.spec.js"
               data-name="bugfix/for-1076-datagrid-min-max"
               data-skip-pjax="true"
               rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                bugfix/for-1076-datagrid-min-max
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/formio/formio.js/blob/bugfix/for-1106-autofocus/src/utils/jsonlogic/operators.spec.js"
               data-name="bugfix/for-1106-autofocus"
               data-skip-pjax="true"
               rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                bugfix/for-1106-autofocus
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/formio/formio.js/blob/bugfix/for-1112-number-default/src/utils/jsonlogic/operators.spec.js"
               data-name="bugfix/for-1112-number-default"
               data-skip-pjax="true"
               rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                bugfix/for-1112-number-default
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/formio/formio.js/blob/bugfix/for-1120-radio-on-nested-forms/src/utils/jsonlogic/operators.spec.js"
               data-name="bugfix/for-1120-radio-on-nested-forms"
               data-skip-pjax="true"
               rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                bugfix/for-1120-radio-on-nested-forms
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/formio/formio.js/blob/bugfix/for-1131-required-checkbox/src/utils/jsonlogic/operators.spec.js"
               data-name="bugfix/for-1131-required-checkbox"
               data-skip-pjax="true"
               rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                bugfix/for-1131-required-checkbox
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/formio/formio.js/blob/bugfix/for-1139-date-time-calculation/src/utils/jsonlogic/operators.spec.js"
               data-name="bugfix/for-1139-date-time-calculation"
               data-skip-pjax="true"
               rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                bugfix/for-1139-date-time-calculation
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/formio/formio.js/blob/bugfix/for-1145-empty-email/src/utils/jsonlogic/operators.spec.js"
               data-name="bugfix/for-1145-empty-email"
               data-skip-pjax="true"
               rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                bugfix/for-1145-empty-email
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/formio/formio.js/blob/bugfix/for-1183-editgrid-interpolation/src/utils/jsonlogic/operators.spec.js"
               data-name="bugfix/for-1183-editgrid-interpolation"
               data-skip-pjax="true"
               rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                bugfix/for-1183-editgrid-interpolation
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/formio/formio.js/blob/bugfix/for-1186-validation-inside-datagrid/src/utils/jsonlogic/operators.spec.js"
               data-name="bugfix/for-1186-validation-inside-datagrid"
               data-skip-pjax="true"
               rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                bugfix/for-1186-validation-inside-datagrid
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/formio/formio.js/blob/bugfix/form-builder-broken-settings-override/src/utils/jsonlogic/operators.spec.js"
               data-name="bugfix/form-builder-broken-settings-override"
               data-skip-pjax="true"
               rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                bugfix/form-builder-broken-settings-override
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/formio/formio.js/blob/bugfix/form-builder-phone-number-not-working/src/utils/jsonlogic/operators.spec.js"
               data-name="bugfix/form-builder-phone-number-not-working"
               data-skip-pjax="true"
               rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                bugfix/form-builder-phone-number-not-working
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/formio/formio.js/blob/bugfix/form-paths/src/utils/jsonlogic/operators.spec.js"
               data-name="bugfix/form-paths"
               data-skip-pjax="true"
               rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                bugfix/form-paths
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/formio/formio.js/blob/bugfix/formOnly/src/utils/jsonlogic/operators.spec.js"
               data-name="bugfix/formOnly"
               data-skip-pjax="true"
               rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                bugfix/formOnly
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/formio/formio.js/blob/bugfix/iframe/src/utils/jsonlogic/operators.spec.js"
               data-name="bugfix/iframe"
               data-skip-pjax="true"
               rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                bugfix/iframe
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/formio/formio.js/blob/bugfix/ios-private/src/utils/jsonlogic/operators.spec.js"
               data-name="bugfix/ios-private"
               data-skip-pjax="true"
               rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                bugfix/ios-private
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/formio/formio.js/blob/bugfix/lodash-in-jsonlogic/src/utils/jsonlogic/operators.spec.js"
               data-name="bugfix/lodash-in-jsonlogic"
               data-skip-pjax="true"
               rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                bugfix/lodash-in-jsonlogic
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/formio/formio.js/blob/bugfix/login-cache-invalidation/src/utils/jsonlogic/operators.spec.js"
               data-name="bugfix/login-cache-invalidation"
               data-skip-pjax="true"
               rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                bugfix/login-cache-invalidation
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/formio/formio.js/blob/bugfix/nested-form-save-as/src/utils/jsonlogic/operators.spec.js"
               data-name="bugfix/nested-form-save-as"
               data-skip-pjax="true"
               rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                bugfix/nested-form-save-as
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/formio/formio.js/blob/bugfix/nextPage-page-next/src/utils/jsonlogic/operators.spec.js"
               data-name="bugfix/nextPage-page-next"
               data-skip-pjax="true"
               rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                bugfix/nextPage-page-next
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/formio/formio.js/blob/bugfix/object-object/src/utils/jsonlogic/operators.spec.js"
               data-name="bugfix/object-object"
               data-skip-pjax="true"
               rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                bugfix/object-object
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/formio/formio.js/blob/bugfix/pathing/src/utils/jsonlogic/operators.spec.js"
               data-name="bugfix/pathing"
               data-skip-pjax="true"
               rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                bugfix/pathing
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/formio/formio.js/blob/bugfix/promise-error/src/utils/jsonlogic/operators.spec.js"
               data-name="bugfix/promise-error"
               data-skip-pjax="true"
               rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                bugfix/promise-error
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/formio/formio.js/blob/bugfix/promise/src/utils/jsonlogic/operators.spec.js"
               data-name="bugfix/promise"
               data-skip-pjax="true"
               rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                bugfix/promise
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/formio/formio.js/blob/bugfix/radio/src/utils/jsonlogic/operators.spec.js"
               data-name="bugfix/radio"
               data-skip-pjax="true"
               rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                bugfix/radio
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/formio/formio.js/blob/bugfix/revision-0/src/utils/jsonlogic/operators.spec.js"
               data-name="bugfix/revision-0"
               data-skip-pjax="true"
               rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                bugfix/revision-0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/formio/formio.js/blob/bugfix/search-null/src/utils/jsonlogic/operators.spec.js"
               data-name="bugfix/search-null"
               data-skip-pjax="true"
               rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                bugfix/search-null
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/formio/formio.js/blob/bugfix/wizard-nested/src/utils/jsonlogic/operators.spec.js"
               data-name="bugfix/wizard-nested"
               data-skip-pjax="true"
               rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                bugfix/wizard-nested
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/formio/formio.js/blob/build-2.1.3/src/utils/jsonlogic/operators.spec.js"
               data-name="build-2.1.3"
               data-skip-pjax="true"
               rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                build-2.1.3
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/formio/formio.js/blob/build-2.3.3/src/utils/jsonlogic/operators.spec.js"
               data-name="build-2.3.3"
               data-skip-pjax="true"
               rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                build-2.3.3
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/formio/formio.js/blob/build-2.3.4/src/utils/jsonlogic/operators.spec.js"
               data-name="build-2.3.4"
               data-skip-pjax="true"
               rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                build-2.3.4
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/formio/formio.js/blob/build-2.5.0/src/utils/jsonlogic/operators.spec.js"
               data-name="build-2.5.0"
               data-skip-pjax="true"
               rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                build-2.5.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/formio/formio.js/blob/build-2.6.0/src/utils/jsonlogic/operators.spec.js"
               data-name="build-2.6.0"
               data-skip-pjax="true"
               rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                build-2.6.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/formio/formio.js/blob/build-2.8.3/src/utils/jsonlogic/operators.spec.js"
               data-name="build-2.8.3"
               data-skip-pjax="true"
               rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                build-2.8.3
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/formio/formio.js/blob/build-2.8.5/src/utils/jsonlogic/operators.spec.js"
               data-name="build-2.8.5"
               data-skip-pjax="true"
               rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                build-2.8.5
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/formio/formio.js/blob/build-2.9.10/src/utils/jsonlogic/operators.spec.js"
               data-name="build-2.9.10"
               data-skip-pjax="true"
               rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                build-2.9.10
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/formio/formio.js/blob/build-2.13.0/src/utils/jsonlogic/operators.spec.js"
               data-name="build-2.13.0"
               data-skip-pjax="true"
               rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                build-2.13.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/formio/formio.js/blob/build-2.13.5/src/utils/jsonlogic/operators.spec.js"
               data-name="build-2.13.5"
               data-skip-pjax="true"
               rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                build-2.13.5
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/formio/formio.js/blob/build-2.15.0/src/utils/jsonlogic/operators.spec.js"
               data-name="build-2.15.0"
               data-skip-pjax="true"
               rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                build-2.15.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/formio/formio.js/blob/build-2.17.3/src/utils/jsonlogic/operators.spec.js"
               data-name="build-2.17.3"
               data-skip-pjax="true"
               rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                build-2.17.3
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/formio/formio.js/blob/build-2.17.5/src/utils/jsonlogic/operators.spec.js"
               data-name="build-2.17.5"
               data-skip-pjax="true"
               rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                build-2.17.5
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/formio/formio.js/blob/build-2.17.6/src/utils/jsonlogic/operators.spec.js"
               data-name="build-2.17.6"
               data-skip-pjax="true"
               rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                build-2.17.6
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/formio/formio.js/blob/build-2.17.7/src/utils/jsonlogic/operators.spec.js"
               data-name="build-2.17.7"
               data-skip-pjax="true"
               rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                build-2.17.7
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/formio/formio.js/blob/build-2.18.0/src/utils/jsonlogic/operators.spec.js"
               data-name="build-2.18.0"
               data-skip-pjax="true"
               rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                build-2.18.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/formio/formio.js/blob/build-2.19.0/src/utils/jsonlogic/operators.spec.js"
               data-name="build-2.19.0"
               data-skip-pjax="true"
               rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                build-2.19.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/formio/formio.js/blob/build-2.19.1/src/utils/jsonlogic/operators.spec.js"
               data-name="build-2.19.1"
               data-skip-pjax="true"
               rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                build-2.19.1
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/formio/formio.js/blob/build-2.19.2/src/utils/jsonlogic/operators.spec.js"
               data-name="build-2.19.2"
               data-skip-pjax="true"
               rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                build-2.19.2
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/formio/formio.js/blob/build-2.19.3/src/utils/jsonlogic/operators.spec.js"
               data-name="build-2.19.3"
               data-skip-pjax="true"
               rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                build-2.19.3
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/formio/formio.js/blob/build-2.20.3/src/utils/jsonlogic/operators.spec.js"
               data-name="build-2.20.3"
               data-skip-pjax="true"
               rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                build-2.20.3
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/formio/formio.js/blob/build-2.20.4/src/utils/jsonlogic/operators.spec.js"
               data-name="build-2.20.4"
               data-skip-pjax="true"
               rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                build-2.20.4
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/formio/formio.js/blob/build-2.21.0/src/utils/jsonlogic/operators.spec.js"
               data-name="build-2.21.0"
               data-skip-pjax="true"
               rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                build-2.21.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/formio/formio.js/blob/build-2.21.1/src/utils/jsonlogic/operators.spec.js"
               data-name="build-2.21.1"
               data-skip-pjax="true"
               rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                build-2.21.1
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/formio/formio.js/blob/build-2.21.2/src/utils/jsonlogic/operators.spec.js"
               data-name="build-2.21.2"
               data-skip-pjax="true"
               rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                build-2.21.2
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/formio/formio.js/blob/build-2.21.3/src/utils/jsonlogic/operators.spec.js"
               data-name="build-2.21.3"
               data-skip-pjax="true"
               rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                build-2.21.3
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/formio/formio.js/blob/build-2.23.2/src/utils/jsonlogic/operators.spec.js"
               data-name="build-2.23.2"
               data-skip-pjax="true"
               rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                build-2.23.2
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/formio/formio.js/blob/build-2.24.3/src/utils/jsonlogic/operators.spec.js"
               data-name="build-2.24.3"
               data-skip-pjax="true"
               rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                build-2.24.3
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/formio/formio.js/blob/build-2.24.5/src/utils/jsonlogic/operators.spec.js"
               data-name="build-2.24.5"
               data-skip-pjax="true"
               rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                build-2.24.5
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/formio/formio.js/blob/build-2.24.6/src/utils/jsonlogic/operators.spec.js"
               data-name="build-2.24.6"
               data-skip-pjax="true"
               rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                build-2.24.6
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/formio/formio.js/blob/build-2.25.3/src/utils/jsonlogic/operators.spec.js"
               data-name="build-2.25.3"
               data-skip-pjax="true"
               rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                build-2.25.3
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/formio/formio.js/blob/build-2.25.4/src/utils/jsonlogic/operators.spec.js"
               data-name="build-2.25.4"
               data-skip-pjax="true"
               rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                build-2.25.4
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/formio/formio.js/blob/build-2.25.5/src/utils/jsonlogic/operators.spec.js"
               data-name="build-2.25.5"
               data-skip-pjax="true"
               rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                build-2.25.5
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/formio/formio.js/blob/build-2.25.6/src/utils/jsonlogic/operators.spec.js"
               data-name="build-2.25.6"
               data-skip-pjax="true"
               rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                build-2.25.6
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/formio/formio.js/blob/build-2.25.7/src/utils/jsonlogic/operators.spec.js"
               data-name="build-2.25.7"
               data-skip-pjax="true"
               rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                build-2.25.7
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/formio/formio.js/blob/build-2.26.3/src/utils/jsonlogic/operators.spec.js"
               data-name="build-2.26.3"
               data-skip-pjax="true"
               rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                build-2.26.3
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/formio/formio.js/blob/build-2.27.0/src/utils/jsonlogic/operators.spec.js"
               data-name="build-2.27.0"
               data-skip-pjax="true"
               rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                build-2.27.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/formio/formio.js/blob/build-2.27.1/src/utils/jsonlogic/operators.spec.js"
               data-name="build-2.27.1"
               data-skip-pjax="true"
               rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                build-2.27.1
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/formio/formio.js/blob/build-2.29.3/src/utils/jsonlogic/operators.spec.js"
               data-name="build-2.29.3"
               data-skip-pjax="true"
               rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                build-2.29.3
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/formio/formio.js/blob/build-2.29.4/src/utils/jsonlogic/operators.spec.js"
               data-name="build-2.29.4"
               data-skip-pjax="true"
               rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                build-2.29.4
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/formio/formio.js/blob/build-2.30.0/src/utils/jsonlogic/operators.spec.js"
               data-name="build-2.30.0"
               data-skip-pjax="true"
               rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                build-2.30.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/formio/formio.js/blob/build-2.31.4/src/utils/jsonlogic/operators.spec.js"
               data-name="build-2.31.4"
               data-skip-pjax="true"
               rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                build-2.31.4
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/formio/formio.js/blob/changed-download-url/src/utils/jsonlogic/operators.spec.js"
               data-name="changed-download-url"
               data-skip-pjax="true"
               rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                changed-download-url
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/formio/formio.js/blob/clone-default-value/src/utils/jsonlogic/operators.spec.js"
               data-name="clone-default-value"
               data-skip-pjax="true"
               rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                clone-default-value
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/formio/formio.js/blob/custom-file-service/src/utils/jsonlogic/operators.spec.js"
               data-name="custom-file-service"
               data-skip-pjax="true"
               rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                custom-file-service
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/formio/formio.js/blob/custom-header/src/utils/jsonlogic/operators.spec.js"
               data-name="custom-header"
               data-skip-pjax="true"
               rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                custom-header
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/formio/formio.js/blob/ensure-formload-on-data/src/utils/jsonlogic/operators.spec.js"
               data-name="ensure-formload-on-data"
               data-skip-pjax="true"
               rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                ensure-formload-on-data
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/formio/formio.js/blob/ensure-no-duplidate-id/src/utils/jsonlogic/operators.spec.js"
               data-name="ensure-no-duplidate-id"
               data-skip-pjax="true"
               rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                ensure-no-duplidate-id
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/formio/formio.js/blob/feature/FA-493-offline-mode-final/src/utils/jsonlogic/operators.spec.js"
               data-name="feature/FA-493-offline-mode-final"
               data-skip-pjax="true"
               rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                feature/FA-493-offline-mode-final
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/formio/formio.js/blob/feature/FA-493-offline-mode/src/utils/jsonlogic/operators.spec.js"
               data-name="feature/FA-493-offline-mode"
               data-skip-pjax="true"
               rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                feature/FA-493-offline-mode
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/formio/formio.js/blob/feature/FA-496-load-projects-queries/src/utils/jsonlogic/operators.spec.js"
               data-name="feature/FA-496-load-projects-queries"
               data-skip-pjax="true"
               rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                feature/FA-496-load-projects-queries
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/formio/formio.js/blob/feature/FOR-409-subdomains/src/utils/jsonlogic/operators.spec.js"
               data-name="feature/FOR-409-subdomains"
               data-skip-pjax="true"
               rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                feature/FOR-409-subdomains
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/formio/formio.js/blob/feature/FOR-409-subdomains2/src/utils/jsonlogic/operators.spec.js"
               data-name="feature/FOR-409-subdomains2"
               data-skip-pjax="true"
               rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                feature/FOR-409-subdomains2
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/formio/formio.js/blob/feature/FOR-1150-core-builder-multi-mask-phonenumber/src/utils/jsonlogic/operators.spec.js"
               data-name="feature/FOR-1150-core-builder-multi-mask-phonenumber"
               data-skip-pjax="true"
               rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                feature/FOR-1150-core-builder-multi-mask-phonenumber
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/formio/formio.js/blob/feature/FOR-1150-phone-number-multiple-masks/src/utils/jsonlogic/operators.spec.js"
               data-name="feature/FOR-1150-phone-number-multiple-masks"
               data-skip-pjax="true"
               rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                feature/FOR-1150-phone-number-multiple-masks
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/formio/formio.js/blob/feature/OAuth/src/utils/jsonlogic/operators.spec.js"
               data-name="feature/OAuth"
               data-skip-pjax="true"
               rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                feature/OAuth
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/formio/formio.js/blob/feature/add-another/src/utils/jsonlogic/operators.spec.js"
               data-name="feature/add-another"
               data-skip-pjax="true"
               rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                feature/add-another
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/formio/formio.js/blob/feature/added-input-added-option/src/utils/jsonlogic/operators.spec.js"
               data-name="feature/added-input-added-option"
               data-skip-pjax="true"
               rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                feature/added-input-added-option
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/formio/formio.js/blob/feature/addlanguage/src/utils/jsonlogic/operators.spec.js"
               data-name="feature/addlanguage"
               data-skip-pjax="true"
               rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                feature/addlanguage
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/formio/formio.js/blob/feature/advanced-conditionals/src/utils/jsonlogic/operators.spec.js"
               data-name="feature/advanced-conditionals"
               data-skip-pjax="true"
               rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                feature/advanced-conditionals
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/formio/formio.js/blob/feature/advanced-logic/src/utils/jsonlogic/operators.spec.js"
               data-name="feature/advanced-logic"
               data-skip-pjax="true"
               rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                feature/advanced-logic
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/formio/formio.js/blob/feature/ce_cleanup/src/utils/jsonlogic/operators.spec.js"
               data-name="feature/ce_cleanup"
               data-skip-pjax="true"
               rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                feature/ce_cleanup
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/formio/formio.js/blob/feature/components-tooltip/src/utils/jsonlogic/operators.spec.js"
               data-name="feature/components-tooltip"
               data-skip-pjax="true"
               rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                feature/components-tooltip
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/formio/formio.js/blob/feature/cookie-fallback/src/utils/jsonlogic/operators.spec.js"
               data-name="feature/cookie-fallback"
               data-skip-pjax="true"
               rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                feature/cookie-fallback
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/formio/formio.js/blob/feature/currentuser-options/src/utils/jsonlogic/operators.spec.js"
               data-name="feature/currentuser-options"
               data-skip-pjax="true"
               rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                feature/currentuser-options
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/formio/formio.js/blob/feature/customize-validation-message/src/utils/jsonlogic/operators.spec.js"
               data-name="feature/customize-validation-message"
               data-skip-pjax="true"
               rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                feature/customize-validation-message
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/formio/formio.js/blob/feature/data-reprint/src/utils/jsonlogic/operators.spec.js"
               data-name="feature/data-reprint"
               data-skip-pjax="true"
               rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                feature/data-reprint
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/formio/formio.js/blob/feature/editgrid-data/src/utils/jsonlogic/operators.spec.js"
               data-name="feature/editgrid-data"
               data-skip-pjax="true"
               rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                feature/editgrid-data
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/formio/formio.js/blob/feature/editgrid-data2/src/utils/jsonlogic/operators.spec.js"
               data-name="feature/editgrid-data2"
               data-skip-pjax="true"
               rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                feature/editgrid-data2
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/formio/formio.js/blob/feature/editgrid/src/utils/jsonlogic/operators.spec.js"
               data-name="feature/editgrid"
               data-skip-pjax="true"
               rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                feature/editgrid
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/formio/formio.js/blob/feature/field-encryption/src/utils/jsonlogic/operators.spec.js"
               data-name="feature/field-encryption"
               data-skip-pjax="true"
               rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                feature/field-encryption
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/formio/formio.js/blob/feature/file-support/src/utils/jsonlogic/operators.spec.js"
               data-name="feature/file-support"
               data-skip-pjax="true"
               rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                feature/file-support
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/formio/formio.js/blob/feature/file/src/utils/jsonlogic/operators.spec.js"
               data-name="feature/file"
               data-skip-pjax="true"
               rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                feature/file
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/formio/formio.js/blob/feature/for-218/src/utils/jsonlogic/operators.spec.js"
               data-name="feature/for-218"
               data-skip-pjax="true"
               rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                feature/for-218
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/formio/formio.js/blob/feature/for-251/src/utils/jsonlogic/operators.spec.js"
               data-name="feature/for-251"
               data-skip-pjax="true"
               rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                feature/for-251
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/formio/formio.js/blob/feature/for-713/src/utils/jsonlogic/operators.spec.js"
               data-name="feature/for-713"
               data-skip-pjax="true"
               rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                feature/for-713
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/formio/formio.js/blob/feature/for-775/src/utils/jsonlogic/operators.spec.js"
               data-name="feature/for-775"
               data-skip-pjax="true"
               rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                feature/for-775
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/formio/formio.js/blob/feature/for-778/src/utils/jsonlogic/operators.spec.js"
               data-name="feature/for-778"
               data-skip-pjax="true"
               rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                feature/for-778
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/formio/formio.js/blob/feature/for-795/src/utils/jsonlogic/operators.spec.js"
               data-name="feature/for-795"
               data-skip-pjax="true"
               rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                feature/for-795
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/formio/formio.js/blob/feature/for-811-submit-error-message/src/utils/jsonlogic/operators.spec.js"
               data-name="feature/for-811-submit-error-message"
               data-skip-pjax="true"
               rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                feature/for-811-submit-error-message
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/formio/formio.js/blob/feature/for-927-collapsible-fields/src/utils/jsonlogic/operators.spec.js"
               data-name="feature/for-927-collapsible-fields"
               data-skip-pjax="true"
               rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                feature/for-927-collapsible-fields
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/formio/formio.js/blob/feature/for-928-add-selected-class-for-radio-option/src/utils/jsonlogic/operators.spec.js"
               data-name="feature/for-928-add-selected-class-for-radio-option"
               data-skip-pjax="true"
               rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                feature/for-928-add-selected-class-for-radio-option
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/formio/formio.js/blob/feature/for-968-wizard-buttons-customization/src/utils/jsonlogic/operators.spec.js"
               data-name="feature/for-968-wizard-buttons-customization"
               data-skip-pjax="true"
               rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                feature/for-968-wizard-buttons-customization
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/formio/formio.js/blob/feature/formio-grid/src/utils/jsonlogic/operators.spec.js"
               data-name="feature/formio-grid"
               data-skip-pjax="true"
               rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                feature/formio-grid
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/formio/formio.js/blob/feature/formioWizard-cancel/src/utils/jsonlogic/operators.spec.js"
               data-name="feature/formioWizard-cancel"
               data-skip-pjax="true"
               rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                feature/formioWizard-cancel
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/formio/formio.js/blob/feature/handlebars/src/utils/jsonlogic/operators.spec.js"
               data-name="feature/handlebars"
               data-skip-pjax="true"
               rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                feature/handlebars
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/formio/formio.js/blob/feature/i18n-number/src/utils/jsonlogic/operators.spec.js"
               data-name="feature/i18n-number"
               data-skip-pjax="true"
               rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                feature/i18n-number
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/formio/formio.js/blob/feature/json-logic-dates/src/utils/jsonlogic/operators.spec.js"
               data-name="feature/json-logic-dates"
               data-skip-pjax="true"
               rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                feature/json-logic-dates
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/formio/formio.js/blob/feature/lang/src/utils/jsonlogic/operators.spec.js"
               data-name="feature/lang"
               data-skip-pjax="true"
               rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                feature/lang
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/formio/formio.js/blob/feature/lib-builds/src/utils/jsonlogic/operators.spec.js"
               data-name="feature/lib-builds"
               data-skip-pjax="true"
               rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                feature/lib-builds
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/formio/formio.js/blob/feature/locale-date-formatting/src/utils/jsonlogic/operators.spec.js"
               data-name="feature/locale-date-formatting"
               data-skip-pjax="true"
               rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                feature/locale-date-formatting
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/formio/formio.js/blob/feature/lodash_template/src/utils/jsonlogic/operators.spec.js"
               data-name="feature/lodash_template"
               data-skip-pjax="true"
               rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                feature/lodash_template
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/formio/formio.js/blob/feature/main-src/src/utils/jsonlogic/operators.spec.js"
               data-name="feature/main-src"
               data-skip-pjax="true"
               rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                feature/main-src
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/formio/formio.js/blob/feature/mask-input/src/utils/jsonlogic/operators.spec.js"
               data-name="feature/mask-input"
               data-skip-pjax="true"
               rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                feature/mask-input
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/formio/formio.js/blob/feature/mock-tests/src/utils/jsonlogic/operators.spec.js"
               data-name="feature/mock-tests"
               data-skip-pjax="true"
               rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                feature/mock-tests
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/formio/formio.js/blob/feature/oauth-initiated-login/src/utils/jsonlogic/operators.spec.js"
               data-name="feature/oauth-initiated-login"
               data-skip-pjax="true"
               rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                feature/oauth-initiated-login
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/formio/formio.js/blob/feature/options-alter/src/utils/jsonlogic/operators.spec.js"
               data-name="feature/options-alter"
               data-skip-pjax="true"
               rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                feature/options-alter
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/formio/formio.js/blob/feature/phraseapp/src/utils/jsonlogic/operators.spec.js"
               data-name="feature/phraseapp"
               data-skip-pjax="true"
               rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                feature/phraseapp
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/formio/formio.js/blob/feature/plugin-response/src/utils/jsonlogic/operators.spec.js"
               data-name="feature/plugin-response"
               data-skip-pjax="true"
               rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                feature/plugin-response
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/formio/formio.js/blob/feature/projectUrl/src/utils/jsonlogic/operators.spec.js"
               data-name="feature/projectUrl"
               data-skip-pjax="true"
               rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                feature/projectUrl
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/formio/formio.js/blob/feature/seamless/src/utils/jsonlogic/operators.spec.js"
               data-name="feature/seamless"
               data-skip-pjax="true"
               rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                feature/seamless
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/formio/formio.js/blob/feature/shortcuts/src/utils/jsonlogic/operators.spec.js"
               data-name="feature/shortcuts"
               data-skip-pjax="true"
               rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                feature/shortcuts
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/formio/formio.js/blob/feature/spell-check/src/utils/jsonlogic/operators.spec.js"
               data-name="feature/spell-check"
               data-skip-pjax="true"
               rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                feature/spell-check
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/formio/formio.js/blob/feature/submission-states/src/utils/jsonlogic/operators.spec.js"
               data-name="feature/submission-states"
               data-skip-pjax="true"
               rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                feature/submission-states
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/formio/formio.js/blob/feature/time/src/utils/jsonlogic/operators.spec.js"
               data-name="feature/time"
               data-skip-pjax="true"
               rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                feature/time
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/formio/formio.js/blob/feature/versions/src/utils/jsonlogic/operators.spec.js"
               data-name="feature/versions"
               data-skip-pjax="true"
               rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                feature/versions
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/formio/formio.js/blob/feature/view-as-html/src/utils/jsonlogic/operators.spec.js"
               data-name="feature/view-as-html"
               data-skip-pjax="true"
               rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                feature/view-as-html
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/formio/formio.js/blob/feature/wysiwyg/src/utils/jsonlogic/operators.spec.js"
               data-name="feature/wysiwyg"
               data-skip-pjax="true"
               rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                feature/wysiwyg
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/formio/formio.js/blob/fix-action-on-forms/src/utils/jsonlogic/operators.spec.js"
               data-name="fix-action-on-forms"
               data-skip-pjax="true"
               rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                fix-action-on-forms
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/formio/formio.js/blob/fix-base-url-paths/src/utils/jsonlogic/operators.spec.js"
               data-name="fix-base-url-paths"
               data-skip-pjax="true"
               rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                fix-base-url-paths
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/formio/formio.js/blob/fix-child-override-visibility/src/utils/jsonlogic/operators.spec.js"
               data-name="fix-child-override-visibility"
               data-skip-pjax="true"
               rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                fix-child-override-visibility
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/formio/formio.js/blob/fix-choices-crash/src/utils/jsonlogic/operators.spec.js"
               data-name="fix-choices-crash"
               data-skip-pjax="true"
               rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                fix-choices-crash
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/formio/formio.js/blob/fix-currency-decimal-limit/src/utils/jsonlogic/operators.spec.js"
               data-name="fix-currency-decimal-limit"
               data-skip-pjax="true"
               rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                fix-currency-decimal-limit
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/formio/formio.js/blob/fix-duplicate-datagrid-columns/src/utils/jsonlogic/operators.spec.js"
               data-name="fix-duplicate-datagrid-columns"
               data-skip-pjax="true"
               rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                fix-duplicate-datagrid-columns
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/formio/formio.js/blob/fix-file-upload-crashes/src/utils/jsonlogic/operators.spec.js"
               data-name="fix-file-upload-crashes"
               data-skip-pjax="true"
               rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                fix-file-upload-crashes
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/formio/formio.js/blob/fix-formio-cache-promises/src/utils/jsonlogic/operators.spec.js"
               data-name="fix-formio-cache-promises"
               data-skip-pjax="true"
               rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                fix-formio-cache-promises
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/formio/formio.js/blob/fix-get-url-parts/src/utils/jsonlogic/operators.spec.js"
               data-name="fix-get-url-parts"
               data-skip-pjax="true"
               rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                fix-get-url-parts
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/formio/formio.js/blob/fix-get-view/src/utils/jsonlogic/operators.spec.js"
               data-name="fix-get-view"
               data-skip-pjax="true"
               rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                fix-get-view
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/formio/formio.js/blob/fix-infinite-submit/src/utils/jsonlogic/operators.spec.js"
               data-name="fix-infinite-submit"
               data-skip-pjax="true"
               rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                fix-infinite-submit
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/formio/formio.js/blob/fix-logout-issue/src/utils/jsonlogic/operators.spec.js"
               data-name="fix-logout-issue"
               data-skip-pjax="true"
               rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                fix-logout-issue
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/formio/formio.js/blob/fix-nested-form/src/utils/jsonlogic/operators.spec.js"
               data-name="fix-nested-form"
               data-skip-pjax="true"
               rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                fix-nested-form
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/formio/formio.js/blob/fix-oauth-modal/src/utils/jsonlogic/operators.spec.js"
               data-name="fix-oauth-modal"
               data-skip-pjax="true"
               rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                fix-oauth-modal
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/formio/formio.js/blob/fix-radio-require-library/src/utils/jsonlogic/operators.spec.js"
               data-name="fix-radio-require-library"
               data-skip-pjax="true"
               rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                fix-radio-require-library
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/formio/formio.js/blob/fix-ready-trigger/src/utils/jsonlogic/operators.spec.js"
               data-name="fix-ready-trigger"
               data-skip-pjax="true"
               rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                fix-ready-trigger
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/formio/formio.js/blob/fix-required-labels/src/utils/jsonlogic/operators.spec.js"
               data-name="fix-required-labels"
               data-skip-pjax="true"
               rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                fix-required-labels
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/formio/formio.js/blob/fix-select-component-defaults/src/utils/jsonlogic/operators.spec.js"
               data-name="fix-select-component-defaults"
               data-skip-pjax="true"
               rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                fix-select-component-defaults
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/formio/formio.js/blob/fix-selects-and-datagrids/src/utils/jsonlogic/operators.spec.js"
               data-name="fix-selects-and-datagrids"
               data-skip-pjax="true"
               rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                fix-selects-and-datagrids
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/formio/formio.js/blob/fix-signature-scaling/src/utils/jsonlogic/operators.spec.js"
               data-name="fix-signature-scaling"
               data-skip-pjax="true"
               rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                fix-signature-scaling
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/formio/formio.js/blob/fix-single-form-issue/src/utils/jsonlogic/operators.spec.js"
               data-name="fix-single-form-issue"
               data-skip-pjax="true"
               rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                fix-single-form-issue
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/formio/formio.js/blob/fix-subform-conditionals/src/utils/jsonlogic/operators.spec.js"
               data-name="fix-subform-conditionals"
               data-skip-pjax="true"
               rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                fix-subform-conditionals
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/formio/formio.js/blob/fix-subform-urls/src/utils/jsonlogic/operators.spec.js"
               data-name="fix-subform-urls"
               data-skip-pjax="true"
               rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                fix-subform-urls
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/formio/formio.js/blob/fix-subforms-loading-and-calculations/src/utils/jsonlogic/operators.spec.js"
               data-name="fix-subforms-loading-and-calculations"
               data-skip-pjax="true"
               rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                fix-subforms-loading-and-calculations
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/formio/formio.js/blob/fix-tests/src/utils/jsonlogic/operators.spec.js"
               data-name="fix-tests"
               data-skip-pjax="true"
               rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                fix-tests
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/formio/formio.js/blob/fix-view-mode/src/utils/jsonlogic/operators.spec.js"
               data-name="fix-view-mode"
               data-skip-pjax="true"
               rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                fix-view-mode
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/formio/formio.js/blob/fix-warnings-and-errors/src/utils/jsonlogic/operators.spec.js"
               data-name="fix-warnings-and-errors"
               data-skip-pjax="true"
               rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                fix-warnings-and-errors
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/formio/formio.js/blob/fix/FOR-1076/src/utils/jsonlogic/operators.spec.js"
               data-name="fix/FOR-1076"
               data-skip-pjax="true"
               rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                fix/FOR-1076
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/formio/formio.js/blob/fix/FOR-1086/src/utils/jsonlogic/operators.spec.js"
               data-name="fix/FOR-1086"
               data-skip-pjax="true"
               rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                fix/FOR-1086
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/formio/formio.js/blob/fix/FOR-1174/src/utils/jsonlogic/operators.spec.js"
               data-name="fix/FOR-1174"
               data-skip-pjax="true"
               rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                fix/FOR-1174
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/formio/formio.js/blob/fix/FOR-1182/src/utils/jsonlogic/operators.spec.js"
               data-name="fix/FOR-1182"
               data-skip-pjax="true"
               rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                fix/FOR-1182
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/formio/formio.js/blob/fixed-datagrid-problems/src/utils/jsonlogic/operators.spec.js"
               data-name="fixed-datagrid-problems"
               data-skip-pjax="true"
               rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                fixed-datagrid-problems
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/formio/formio.js/blob/fixed-error-handling/src/utils/jsonlogic/operators.spec.js"
               data-name="fixed-error-handling"
               data-skip-pjax="true"
               rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                fixed-error-handling
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/formio/formio.js/blob/fixed-eval-code/src/utils/jsonlogic/operators.spec.js"
               data-name="fixed-eval-code"
               data-skip-pjax="true"
               rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                fixed-eval-code
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/formio/formio.js/blob/fixed-for-in/src/utils/jsonlogic/operators.spec.js"
               data-name="fixed-for-in"
               data-skip-pjax="true"
               rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                fixed-for-in
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/formio/formio.js/blob/fixed-multi-submit-wizard/src/utils/jsonlogic/operators.spec.js"
               data-name="fixed-multi-submit-wizard"
               data-skip-pjax="true"
               rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                fixed-multi-submit-wizard
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/formio/formio.js/blob/fixed-multiple-bugs/src/utils/jsonlogic/operators.spec.js"
               data-name="fixed-multiple-bugs"
               data-skip-pjax="true"
               rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                fixed-multiple-bugs
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/formio/formio.js/blob/fixed-setvalue-flags/src/utils/jsonlogic/operators.spec.js"
               data-name="fixed-setvalue-flags"
               data-skip-pjax="true"
               rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                fixed-setvalue-flags
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/formio/formio.js/blob/fixed-text-mask-dependency/src/utils/jsonlogic/operators.spec.js"
               data-name="fixed-text-mask-dependency"
               data-skip-pjax="true"
               rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                fixed-text-mask-dependency
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/formio/formio.js/blob/fixed-urls-for-open-source/src/utils/jsonlogic/operators.spec.js"
               data-name="fixed-urls-for-open-source"
               data-skip-pjax="true"
               rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                fixed-urls-for-open-source
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/formio/formio.js/blob/form-builder/src/utils/jsonlogic/operators.spec.js"
               data-name="form-builder"
               data-skip-pjax="true"
               rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                form-builder
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/formio/formio.js/blob/gh-pages/src/utils/jsonlogic/operators.spec.js"
               data-name="gh-pages"
               data-skip-pjax="true"
               rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                gh-pages
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/formio/formio.js/blob/hotfix/calculated-values/src/utils/jsonlogic/operators.spec.js"
               data-name="hotfix/calculated-values"
               data-skip-pjax="true"
               rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                hotfix/calculated-values
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/formio/formio.js/blob/language/material/src/utils/jsonlogic/operators.spec.js"
               data-name="language/material"
               data-skip-pjax="true"
               rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                language/material
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/formio/formio.js/blob/major-performance-improvements/src/utils/jsonlogic/operators.spec.js"
               data-name="major-performance-improvements"
               data-skip-pjax="true"
               rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                major-performance-improvements
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open selected"
               href="/formio/formio.js/blob/master/src/utils/jsonlogic/operators.spec.js"
               data-name="master"
               data-skip-pjax="true"
               rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                master
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/formio/formio.js/blob/more-fixes-to-renderer/src/utils/jsonlogic/operators.spec.js"
               data-name="more-fixes-to-renderer"
               data-skip-pjax="true"
               rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                more-fixes-to-renderer
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/formio/formio.js/blob/multi-page-forms/src/utils/jsonlogic/operators.spec.js"
               data-name="multi-page-forms"
               data-skip-pjax="true"
               rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                multi-page-forms
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/formio/formio.js/blob/pass-along-options/src/utils/jsonlogic/operators.spec.js"
               data-name="pass-along-options"
               data-skip-pjax="true"
               rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                pass-along-options
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/formio/formio.js/blob/pdf-support/src/utils/jsonlogic/operators.spec.js"
               data-name="pdf-support"
               data-skip-pjax="true"
               rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                pdf-support
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/formio/formio.js/blob/refactor-data-grid/src/utils/jsonlogic/operators.spec.js"
               data-name="refactor-data-grid"
               data-skip-pjax="true"
               rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                refactor-data-grid
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/formio/formio.js/blob/refactor-form-component/src/utils/jsonlogic/operators.spec.js"
               data-name="refactor-form-component"
               data-skip-pjax="true"
               rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                refactor-form-component
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/formio/formio.js/blob/refactor-http-requests/src/utils/jsonlogic/operators.spec.js"
               data-name="refactor-http-requests"
               data-skip-pjax="true"
               rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                refactor-http-requests
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/formio/formio.js/blob/replace-q-with-promise/src/utils/jsonlogic/operators.spec.js"
               data-name="replace-q-with-promise"
               data-skip-pjax="true"
               rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                replace-q-with-promise
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/formio/formio.js/blob/set-is-equal-select/src/utils/jsonlogic/operators.spec.js"
               data-name="set-is-equal-select"
               data-skip-pjax="true"
               rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                set-is-equal-select
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/formio/formio.js/blob/simplified-data-handling/src/utils/jsonlogic/operators.spec.js"
               data-name="simplified-data-handling"
               data-skip-pjax="true"
               rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                simplified-data-handling
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/formio/formio.js/blob/solidify-date-picker/src/utils/jsonlogic/operators.spec.js"
               data-name="solidify-date-picker"
               data-skip-pjax="true"
               rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                solidify-date-picker
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/formio/formio.js/blob/trigger-events/src/utils/jsonlogic/operators.spec.js"
               data-name="trigger-events"
               data-skip-pjax="true"
               rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                trigger-events
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/formio/formio.js/blob/use-eventemitter2/src/utils/jsonlogic/operators.spec.js"
               data-name="use-eventemitter2"
               data-skip-pjax="true"
               rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                use-eventemitter2
              </span>
            </a>
        </div>

          <div class="select-menu-no-results">Nothing to show</div>
      </div>

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="tags">
        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/formio/formio.js/tree/v3.0.0-alpha.3/src/utils/jsonlogic/operators.spec.js"
              data-name="v3.0.0-alpha.3"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v3.0.0-alpha.3">
                v3.0.0-alpha.3
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/formio/formio.js/tree/v3.0.0-alpha.2/src/utils/jsonlogic/operators.spec.js"
              data-name="v3.0.0-alpha.2"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v3.0.0-alpha.2">
                v3.0.0-alpha.2
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/formio/formio.js/tree/v3.0.0-alpha.1/src/utils/jsonlogic/operators.spec.js"
              data-name="v3.0.0-alpha.1"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v3.0.0-alpha.1">
                v3.0.0-alpha.1
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/formio/formio.js/tree/v2.32.1/src/utils/jsonlogic/operators.spec.js"
              data-name="v2.32.1"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v2.32.1">
                v2.32.1
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/formio/formio.js/tree/v2.32.0/src/utils/jsonlogic/operators.spec.js"
              data-name="v2.32.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v2.32.0">
                v2.32.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/formio/formio.js/tree/v2.32.0-beta.1/src/utils/jsonlogic/operators.spec.js"
              data-name="v2.32.0-beta.1"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v2.32.0-beta.1">
                v2.32.0-beta.1
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/formio/formio.js/tree/v2.31.4/src/utils/jsonlogic/operators.spec.js"
              data-name="v2.31.4"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v2.31.4">
                v2.31.4
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/formio/formio.js/tree/v2.31.3/src/utils/jsonlogic/operators.spec.js"
              data-name="v2.31.3"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v2.31.3">
                v2.31.3
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/formio/formio.js/tree/v2.31.2/src/utils/jsonlogic/operators.spec.js"
              data-name="v2.31.2"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v2.31.2">
                v2.31.2
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/formio/formio.js/tree/v2.31.1/src/utils/jsonlogic/operators.spec.js"
              data-name="v2.31.1"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v2.31.1">
                v2.31.1
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/formio/formio.js/tree/v2.31.0/src/utils/jsonlogic/operators.spec.js"
              data-name="v2.31.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v2.31.0">
                v2.31.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/formio/formio.js/tree/v2.30.2/src/utils/jsonlogic/operators.spec.js"
              data-name="v2.30.2"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v2.30.2">
                v2.30.2
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/formio/formio.js/tree/v2.30.1/src/utils/jsonlogic/operators.spec.js"
              data-name="v2.30.1"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v2.30.1">
                v2.30.1
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/formio/formio.js/tree/v2.30.0/src/utils/jsonlogic/operators.spec.js"
              data-name="v2.30.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v2.30.0">
                v2.30.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/formio/formio.js/tree/v2.29.13/src/utils/jsonlogic/operators.spec.js"
              data-name="v2.29.13"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v2.29.13">
                v2.29.13
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/formio/formio.js/tree/v2.29.12/src/utils/jsonlogic/operators.spec.js"
              data-name="v2.29.12"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v2.29.12">
                v2.29.12
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/formio/formio.js/tree/v2.29.11/src/utils/jsonlogic/operators.spec.js"
              data-name="v2.29.11"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v2.29.11">
                v2.29.11
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/formio/formio.js/tree/v2.29.10/src/utils/jsonlogic/operators.spec.js"
              data-name="v2.29.10"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v2.29.10">
                v2.29.10
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/formio/formio.js/tree/v2.29.9/src/utils/jsonlogic/operators.spec.js"
              data-name="v2.29.9"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v2.29.9">
                v2.29.9
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/formio/formio.js/tree/v2.29.8/src/utils/jsonlogic/operators.spec.js"
              data-name="v2.29.8"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v2.29.8">
                v2.29.8
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/formio/formio.js/tree/v2.29.7/src/utils/jsonlogic/operators.spec.js"
              data-name="v2.29.7"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v2.29.7">
                v2.29.7
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/formio/formio.js/tree/v2.29.6/src/utils/jsonlogic/operators.spec.js"
              data-name="v2.29.6"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v2.29.6">
                v2.29.6
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/formio/formio.js/tree/v2.29.5/src/utils/jsonlogic/operators.spec.js"
              data-name="v2.29.5"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v2.29.5">
                v2.29.5
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/formio/formio.js/tree/v2.29.4/src/utils/jsonlogic/operators.spec.js"
              data-name="v2.29.4"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v2.29.4">
                v2.29.4
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/formio/formio.js/tree/v2.29.3/src/utils/jsonlogic/operators.spec.js"
              data-name="v2.29.3"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v2.29.3">
                v2.29.3
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/formio/formio.js/tree/v2.29.2/src/utils/jsonlogic/operators.spec.js"
              data-name="v2.29.2"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v2.29.2">
                v2.29.2
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/formio/formio.js/tree/v2.29.1/src/utils/jsonlogic/operators.spec.js"
              data-name="v2.29.1"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v2.29.1">
                v2.29.1
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/formio/formio.js/tree/v2.29.0/src/utils/jsonlogic/operators.spec.js"
              data-name="v2.29.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v2.29.0">
                v2.29.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/formio/formio.js/tree/v2.28.6/src/utils/jsonlogic/operators.spec.js"
              data-name="v2.28.6"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v2.28.6">
                v2.28.6
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/formio/formio.js/tree/v2.28.5/src/utils/jsonlogic/operators.spec.js"
              data-name="v2.28.5"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v2.28.5">
                v2.28.5
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/formio/formio.js/tree/v2.28.4/src/utils/jsonlogic/operators.spec.js"
              data-name="v2.28.4"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v2.28.4">
                v2.28.4
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/formio/formio.js/tree/v2.28.3/src/utils/jsonlogic/operators.spec.js"
              data-name="v2.28.3"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v2.28.3">
                v2.28.3
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/formio/formio.js/tree/v2.28.2/src/utils/jsonlogic/operators.spec.js"
              data-name="v2.28.2"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v2.28.2">
                v2.28.2
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/formio/formio.js/tree/v2.28.1/src/utils/jsonlogic/operators.spec.js"
              data-name="v2.28.1"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v2.28.1">
                v2.28.1
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/formio/formio.js/tree/v2.28.0/src/utils/jsonlogic/operators.spec.js"
              data-name="v2.28.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v2.28.0">
                v2.28.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/formio/formio.js/tree/v2.27.6/src/utils/jsonlogic/operators.spec.js"
              data-name="v2.27.6"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v2.27.6">
                v2.27.6
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/formio/formio.js/tree/v2.27.5/src/utils/jsonlogic/operators.spec.js"
              data-name="v2.27.5"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v2.27.5">
                v2.27.5
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/formio/formio.js/tree/v2.27.4/src/utils/jsonlogic/operators.spec.js"
              data-name="v2.27.4"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v2.27.4">
                v2.27.4
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/formio/formio.js/tree/v2.27.3/src/utils/jsonlogic/operators.spec.js"
              data-name="v2.27.3"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v2.27.3">
                v2.27.3
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/formio/formio.js/tree/v2.27.2/src/utils/jsonlogic/operators.spec.js"
              data-name="v2.27.2"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v2.27.2">
                v2.27.2
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/formio/formio.js/tree/v2.27.1/src/utils/jsonlogic/operators.spec.js"
              data-name="v2.27.1"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v2.27.1">
                v2.27.1
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/formio/formio.js/tree/v2.27.0/src/utils/jsonlogic/operators.spec.js"
              data-name="v2.27.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v2.27.0">
                v2.27.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/formio/formio.js/tree/v2.26.2/src/utils/jsonlogic/operators.spec.js"
              data-name="v2.26.2"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v2.26.2">
                v2.26.2
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/formio/formio.js/tree/v2.26.1/src/utils/jsonlogic/operators.spec.js"
              data-name="v2.26.1"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v2.26.1">
                v2.26.1
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/formio/formio.js/tree/v2.26.0/src/utils/jsonlogic/operators.spec.js"
              data-name="v2.26.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v2.26.0">
                v2.26.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/formio/formio.js/tree/v2.25.8/src/utils/jsonlogic/operators.spec.js"
              data-name="v2.25.8"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v2.25.8">
                v2.25.8
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/formio/formio.js/tree/v2.25.7/src/utils/jsonlogic/operators.spec.js"
              data-name="v2.25.7"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v2.25.7">
                v2.25.7
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/formio/formio.js/tree/v2.25.6/src/utils/jsonlogic/operators.spec.js"
              data-name="v2.25.6"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v2.25.6">
                v2.25.6
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/formio/formio.js/tree/v2.25.5/src/utils/jsonlogic/operators.spec.js"
              data-name="v2.25.5"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v2.25.5">
                v2.25.5
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/formio/formio.js/tree/v2.25.4/src/utils/jsonlogic/operators.spec.js"
              data-name="v2.25.4"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v2.25.4">
                v2.25.4
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/formio/formio.js/tree/v2.25.3/src/utils/jsonlogic/operators.spec.js"
              data-name="v2.25.3"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v2.25.3">
                v2.25.3
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/formio/formio.js/tree/v2.25.2/src/utils/jsonlogic/operators.spec.js"
              data-name="v2.25.2"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v2.25.2">
                v2.25.2
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/formio/formio.js/tree/v2.25.1/src/utils/jsonlogic/operators.spec.js"
              data-name="v2.25.1"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v2.25.1">
                v2.25.1
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/formio/formio.js/tree/v2.25.0/src/utils/jsonlogic/operators.spec.js"
              data-name="v2.25.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v2.25.0">
                v2.25.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/formio/formio.js/tree/v2.24.6/src/utils/jsonlogic/operators.spec.js"
              data-name="v2.24.6"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v2.24.6">
                v2.24.6
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/formio/formio.js/tree/v2.24.5/src/utils/jsonlogic/operators.spec.js"
              data-name="v2.24.5"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v2.24.5">
                v2.24.5
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/formio/formio.js/tree/v2.24.4/src/utils/jsonlogic/operators.spec.js"
              data-name="v2.24.4"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v2.24.4">
                v2.24.4
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/formio/formio.js/tree/v2.24.3/src/utils/jsonlogic/operators.spec.js"
              data-name="v2.24.3"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v2.24.3">
                v2.24.3
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/formio/formio.js/tree/v2.24.2/src/utils/jsonlogic/operators.spec.js"
              data-name="v2.24.2"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v2.24.2">
                v2.24.2
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/formio/formio.js/tree/v2.24.1/src/utils/jsonlogic/operators.spec.js"
              data-name="v2.24.1"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v2.24.1">
                v2.24.1
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/formio/formio.js/tree/v2.24.0/src/utils/jsonlogic/operators.spec.js"
              data-name="v2.24.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v2.24.0">
                v2.24.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/formio/formio.js/tree/v2.23.2/src/utils/jsonlogic/operators.spec.js"
              data-name="v2.23.2"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v2.23.2">
                v2.23.2
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/formio/formio.js/tree/v2.23.1/src/utils/jsonlogic/operators.spec.js"
              data-name="v2.23.1"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v2.23.1">
                v2.23.1
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/formio/formio.js/tree/v2.23.0/src/utils/jsonlogic/operators.spec.js"
              data-name="v2.23.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v2.23.0">
                v2.23.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/formio/formio.js/tree/v2.22.2/src/utils/jsonlogic/operators.spec.js"
              data-name="v2.22.2"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v2.22.2">
                v2.22.2
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/formio/formio.js/tree/v2.22.1/src/utils/jsonlogic/operators.spec.js"
              data-name="v2.22.1"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v2.22.1">
                v2.22.1
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/formio/formio.js/tree/v2.22.0/src/utils/jsonlogic/operators.spec.js"
              data-name="v2.22.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v2.22.0">
                v2.22.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/formio/formio.js/tree/v2.21.3/src/utils/jsonlogic/operators.spec.js"
              data-name="v2.21.3"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v2.21.3">
                v2.21.3
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/formio/formio.js/tree/v2.21.2/src/utils/jsonlogic/operators.spec.js"
              data-name="v2.21.2"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v2.21.2">
                v2.21.2
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/formio/formio.js/tree/v2.21.1/src/utils/jsonlogic/operators.spec.js"
              data-name="v2.21.1"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v2.21.1">
                v2.21.1
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/formio/formio.js/tree/v2.21.0/src/utils/jsonlogic/operators.spec.js"
              data-name="v2.21.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v2.21.0">
                v2.21.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/formio/formio.js/tree/v2.20.5/src/utils/jsonlogic/operators.spec.js"
              data-name="v2.20.5"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v2.20.5">
                v2.20.5
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/formio/formio.js/tree/v2.20.4/src/utils/jsonlogic/operators.spec.js"
              data-name="v2.20.4"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v2.20.4">
                v2.20.4
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/formio/formio.js/tree/v2.20.3/src/utils/jsonlogic/operators.spec.js"
              data-name="v2.20.3"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v2.20.3">
                v2.20.3
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/formio/formio.js/tree/v2.20.2/src/utils/jsonlogic/operators.spec.js"
              data-name="v2.20.2"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v2.20.2">
                v2.20.2
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/formio/formio.js/tree/v2.20.1/src/utils/jsonlogic/operators.spec.js"
              data-name="v2.20.1"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v2.20.1">
                v2.20.1
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/formio/formio.js/tree/v2.20.0/src/utils/jsonlogic/operators.spec.js"
              data-name="v2.20.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v2.20.0">
                v2.20.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/formio/formio.js/tree/v2.19.3/src/utils/jsonlogic/operators.spec.js"
              data-name="v2.19.3"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v2.19.3">
                v2.19.3
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/formio/formio.js/tree/v2.19.2/src/utils/jsonlogic/operators.spec.js"
              data-name="v2.19.2"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v2.19.2">
                v2.19.2
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/formio/formio.js/tree/v2.19.1/src/utils/jsonlogic/operators.spec.js"
              data-name="v2.19.1"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v2.19.1">
                v2.19.1
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/formio/formio.js/tree/v2.19.0/src/utils/jsonlogic/operators.spec.js"
              data-name="v2.19.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v2.19.0">
                v2.19.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/formio/formio.js/tree/v2.18.0/src/utils/jsonlogic/operators.spec.js"
              data-name="v2.18.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v2.18.0">
                v2.18.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/formio/formio.js/tree/v2.17.6/src/utils/jsonlogic/operators.spec.js"
              data-name="v2.17.6"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v2.17.6">
                v2.17.6
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/formio/formio.js/tree/v2.17.5/src/utils/jsonlogic/operators.spec.js"
              data-name="v2.17.5"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v2.17.5">
                v2.17.5
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/formio/formio.js/tree/v2.17.4/src/utils/jsonlogic/operators.spec.js"
              data-name="v2.17.4"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v2.17.4">
                v2.17.4
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/formio/formio.js/tree/v2.17.3/src/utils/jsonlogic/operators.spec.js"
              data-name="v2.17.3"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v2.17.3">
                v2.17.3
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/formio/formio.js/tree/v2.17.2/src/utils/jsonlogic/operators.spec.js"
              data-name="v2.17.2"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v2.17.2">
                v2.17.2
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/formio/formio.js/tree/v2.17.1/src/utils/jsonlogic/operators.spec.js"
              data-name="v2.17.1"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v2.17.1">
                v2.17.1
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/formio/formio.js/tree/v2.17.0/src/utils/jsonlogic/operators.spec.js"
              data-name="v2.17.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v2.17.0">
                v2.17.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/formio/formio.js/tree/v2.16.1/src/utils/jsonlogic/operators.spec.js"
              data-name="v2.16.1"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v2.16.1">
                v2.16.1
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/formio/formio.js/tree/v2.16.0/src/utils/jsonlogic/operators.spec.js"
              data-name="v2.16.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v2.16.0">
                v2.16.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/formio/formio.js/tree/v2.15.2/src/utils/jsonlogic/operators.spec.js"
              data-name="v2.15.2"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v2.15.2">
                v2.15.2
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/formio/formio.js/tree/v2.15.1/src/utils/jsonlogic/operators.spec.js"
              data-name="v2.15.1"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v2.15.1">
                v2.15.1
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/formio/formio.js/tree/v2.15.0/src/utils/jsonlogic/operators.spec.js"
              data-name="v2.15.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v2.15.0">
                v2.15.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/formio/formio.js/tree/v2.14.2/src/utils/jsonlogic/operators.spec.js"
              data-name="v2.14.2"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v2.14.2">
                v2.14.2
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/formio/formio.js/tree/v2.14.1/src/utils/jsonlogic/operators.spec.js"
              data-name="v2.14.1"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v2.14.1">
                v2.14.1
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/formio/formio.js/tree/v2.14.0/src/utils/jsonlogic/operators.spec.js"
              data-name="v2.14.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v2.14.0">
                v2.14.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/formio/formio.js/tree/v2.13.6/src/utils/jsonlogic/operators.spec.js"
              data-name="v2.13.6"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v2.13.6">
                v2.13.6
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/formio/formio.js/tree/v2.13.5/src/utils/jsonlogic/operators.spec.js"
              data-name="v2.13.5"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v2.13.5">
                v2.13.5
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/formio/formio.js/tree/v2.13.4/src/utils/jsonlogic/operators.spec.js"
              data-name="v2.13.4"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v2.13.4">
                v2.13.4
              </span>
            </a>
        </div>

        <div class="select-menu-no-results">Nothing to show</div>
      </div>

    </div>
  </div>
</div>

    <div class="BtnGroup float-right">
      <a href="/formio/formio.js/find/master"
            class="js-pjax-capture-input btn btn-sm BtnGroup-item"
            data-pjax
            data-hotkey="t">
        Find file
      </a>
      <clipboard-copy for="blob-path" class="btn btn-sm BtnGroup-item">
        Copy path
      </clipboard-copy>
    </div>
    <div id="blob-path" class="breadcrumb">
      <span class="repo-root js-repo-root"><span class="js-path-segment"><a data-pjax="true" href="/formio/formio.js"><span>formio.js</span></a></span></span><span class="separator">/</span><span class="js-path-segment"><a data-pjax="true" href="/formio/formio.js/tree/master/src"><span>src</span></a></span><span class="separator">/</span><span class="js-path-segment"><a data-pjax="true" href="/formio/formio.js/tree/master/src/utils"><span>utils</span></a></span><span class="separator">/</span><span class="js-path-segment"><a data-pjax="true" href="/formio/formio.js/tree/master/src/utils/jsonlogic"><span>jsonlogic</span></a></span><span class="separator">/</span><strong class="final-path">operators.spec.js</strong>
    </div>
  </div>


  <include-fragment src="/formio/formio.js/contributors/master/src/utils/jsonlogic/operators.spec.js" class="commit-tease">
    <div>
      Fetching contributors&hellip;
    </div>

    <div class="commit-tease-contributors">
      <img alt="" class="loader-loading float-left" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32-EAF2F5.gif" width="16" height="16" />
      <span class="loader-error">Cannot retrieve contributors at this time</span>
    </div>
</include-fragment>


  <div class="file">
    <div class="file-header">
  <div class="file-actions">

    <div class="BtnGroup">
      <a id="raw-url" class="btn btn-sm BtnGroup-item" href="/formio/formio.js/raw/master/src/utils/jsonlogic/operators.spec.js">Raw</a>
        <a class="btn btn-sm js-update-url-with-hash BtnGroup-item" data-hotkey="b" href="/formio/formio.js/blame/master/src/utils/jsonlogic/operators.spec.js">Blame</a>
      <a rel="nofollow" class="btn btn-sm BtnGroup-item" href="/formio/formio.js/commits/master/src/utils/jsonlogic/operators.spec.js">History</a>
    </div>


        <button type="button" class="btn-octicon disabled tooltipped tooltipped-nw"
          aria-label="You must be signed in to make or propose changes">
          <svg class="octicon octicon-pencil" viewBox="0 0 14 16" version="1.1" width="14" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M0 12v3h3l8-8-3-3-8 8zm3 2H1v-2h1v1h1v1zm10.3-9.3L12 6 9 3l1.3-1.3a.996.996 0 0 1 1.41 0l1.59 1.59c.39.39.39 1.02 0 1.41z"/></svg>
        </button>
        <button type="button" class="btn-octicon btn-octicon-danger disabled tooltipped tooltipped-nw"
          aria-label="You must be signed in to make or propose changes">
          <svg class="octicon octicon-trashcan" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M11 2H9c0-.55-.45-1-1-1H5c-.55 0-1 .45-1 1H2c-.55 0-1 .45-1 1v1c0 .55.45 1 1 1v9c0 .55.45 1 1 1h7c.55 0 1-.45 1-1V5c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1zm-1 12H3V5h1v8h1V5h1v8h1V5h1v8h1V5h1v9zm1-10H2V3h9v1z"/></svg>
        </button>
  </div>

  <div class="file-info">
      128 lines (118 sloc)
      <span class="file-info-divider"></span>
    3.82 KB
  </div>
</div>

    

  <div itemprop="text" class="blob-wrapper data type-javascript">
      <table class="highlight tab-size js-file-line-container" data-tab-size="2">
      <tr>
        <td id="L1" class="blob-num js-line-number" data-line-number="1"></td>
        <td id="LC1" class="blob-code blob-code-inner js-file-line"><span class="pl-s"><span class="pl-pds">&#39;</span>use strict<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L2" class="blob-num js-line-number" data-line-number="2"></td>
        <td id="LC2" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L3" class="blob-num js-line-number" data-line-number="3"></td>
        <td id="LC3" class="blob-code blob-code-inner js-file-line"><span class="pl-c"><span class="pl-c">/*</span> eslint-env mocha <span class="pl-c">*/</span></span></td>
      </tr>
      <tr>
        <td id="L4" class="blob-num js-line-number" data-line-number="4"></td>
        <td id="LC4" class="blob-code blob-code-inner js-file-line"><span class="pl-k">import</span> {<span class="pl-smi">expect</span>} <span class="pl-k">from</span> <span class="pl-s"><span class="pl-pds">&#39;</span>chai<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L5" class="blob-num js-line-number" data-line-number="5"></td>
        <td id="LC5" class="blob-code blob-code-inner js-file-line"><span class="pl-k">import</span> {<span class="pl-smi">jsonLogic</span>} <span class="pl-k">from</span> <span class="pl-s"><span class="pl-pds">&#39;</span>../index<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L6" class="blob-num js-line-number" data-line-number="6"></td>
        <td id="LC6" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L7" class="blob-num js-line-number" data-line-number="7"></td>
        <td id="LC7" class="blob-code blob-code-inner js-file-line"><span class="pl-en">describe</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>Lodash operators<span class="pl-pds">&#39;</span></span>, () <span class="pl-k">=&gt;</span> {</td>
      </tr>
      <tr>
        <td id="L8" class="blob-num js-line-number" data-line-number="8"></td>
        <td id="LC8" class="blob-code blob-code-inner js-file-line">  <span class="pl-en">describe</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>Arrays<span class="pl-pds">&#39;</span></span>, () <span class="pl-k">=&gt;</span> {</td>
      </tr>
      <tr>
        <td id="L9" class="blob-num js-line-number" data-line-number="9"></td>
        <td id="LC9" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L10" class="blob-num js-line-number" data-line-number="10"></td>
        <td id="LC10" class="blob-code blob-code-inner js-file-line">  });</td>
      </tr>
      <tr>
        <td id="L11" class="blob-num js-line-number" data-line-number="11"></td>
        <td id="LC11" class="blob-code blob-code-inner js-file-line">  <span class="pl-en">describe</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>Collection<span class="pl-pds">&#39;</span></span>, () <span class="pl-k">=&gt;</span> {</td>
      </tr>
      <tr>
        <td id="L12" class="blob-num js-line-number" data-line-number="12"></td>
        <td id="LC12" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L13" class="blob-num js-line-number" data-line-number="13"></td>
        <td id="LC13" class="blob-code blob-code-inner js-file-line">  });</td>
      </tr>
      <tr>
        <td id="L14" class="blob-num js-line-number" data-line-number="14"></td>
        <td id="LC14" class="blob-code blob-code-inner js-file-line">  <span class="pl-en">describe</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>Date<span class="pl-pds">&#39;</span></span>, () <span class="pl-k">=&gt;</span> {</td>
      </tr>
      <tr>
        <td id="L15" class="blob-num js-line-number" data-line-number="15"></td>
        <td id="LC15" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L16" class="blob-num js-line-number" data-line-number="16"></td>
        <td id="LC16" class="blob-code blob-code-inner js-file-line">  });</td>
      </tr>
      <tr>
        <td id="L17" class="blob-num js-line-number" data-line-number="17"></td>
        <td id="LC17" class="blob-code blob-code-inner js-file-line">  <span class="pl-en">describe</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>Function<span class="pl-pds">&#39;</span></span>, () <span class="pl-k">=&gt;</span> {</td>
      </tr>
      <tr>
        <td id="L18" class="blob-num js-line-number" data-line-number="18"></td>
        <td id="LC18" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L19" class="blob-num js-line-number" data-line-number="19"></td>
        <td id="LC19" class="blob-code blob-code-inner js-file-line">  });</td>
      </tr>
      <tr>
        <td id="L20" class="blob-num js-line-number" data-line-number="20"></td>
        <td id="LC20" class="blob-code blob-code-inner js-file-line">  <span class="pl-en">describe</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>Lang<span class="pl-pds">&#39;</span></span>, () <span class="pl-k">=&gt;</span> {</td>
      </tr>
      <tr>
        <td id="L21" class="blob-num js-line-number" data-line-number="21"></td>
        <td id="LC21" class="blob-code blob-code-inner js-file-line">    <span class="pl-en">it</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>isEqual<span class="pl-pds">&#39;</span></span>, () <span class="pl-k">=&gt;</span> {</td>
      </tr>
      <tr>
        <td id="L22" class="blob-num js-line-number" data-line-number="22"></td>
        <td id="LC22" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">const</span> <span class="pl-c1">logicTrue</span> <span class="pl-k">=</span> {_isEqual<span class="pl-k">:</span> [[<span class="pl-c1">2</span>, <span class="pl-c1">3</span>], [<span class="pl-c1">2</span>, <span class="pl-c1">3</span>]]};</td>
      </tr>
      <tr>
        <td id="L23" class="blob-num js-line-number" data-line-number="23"></td>
        <td id="LC23" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">const</span> <span class="pl-c1">logicFalse</span> <span class="pl-k">=</span> {_isEqual<span class="pl-k">:</span> [[<span class="pl-c1">2</span>, <span class="pl-c1">3</span>], [<span class="pl-c1">2</span>, <span class="pl-c1">4</span>]]};</td>
      </tr>
      <tr>
        <td id="L24" class="blob-num js-line-number" data-line-number="24"></td>
        <td id="LC24" class="blob-code blob-code-inner js-file-line">      <span class="pl-en">expect</span>(<span class="pl-smi">jsonLogic</span>.<span class="pl-c1">apply</span>(logicTrue)).<span class="pl-smi">to</span>.<span class="pl-smi">be</span>.<span class="pl-en">equal</span>(<span class="pl-c1">true</span>);</td>
      </tr>
      <tr>
        <td id="L25" class="blob-num js-line-number" data-line-number="25"></td>
        <td id="LC25" class="blob-code blob-code-inner js-file-line">      <span class="pl-en">expect</span>(<span class="pl-smi">jsonLogic</span>.<span class="pl-c1">apply</span>(logicFalse)).<span class="pl-smi">to</span>.<span class="pl-smi">be</span>.<span class="pl-en">equal</span>(<span class="pl-c1">false</span>);</td>
      </tr>
      <tr>
        <td id="L26" class="blob-num js-line-number" data-line-number="26"></td>
        <td id="LC26" class="blob-code blob-code-inner js-file-line">    });</td>
      </tr>
      <tr>
        <td id="L27" class="blob-num js-line-number" data-line-number="27"></td>
        <td id="LC27" class="blob-code blob-code-inner js-file-line">  });</td>
      </tr>
      <tr>
        <td id="L28" class="blob-num js-line-number" data-line-number="28"></td>
        <td id="LC28" class="blob-code blob-code-inner js-file-line">  <span class="pl-en">describe</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>Math<span class="pl-pds">&#39;</span></span>, () <span class="pl-k">=&gt;</span> {</td>
      </tr>
      <tr>
        <td id="L29" class="blob-num js-line-number" data-line-number="29"></td>
        <td id="LC29" class="blob-code blob-code-inner js-file-line">    <span class="pl-en">it</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>add<span class="pl-pds">&#39;</span></span>, () <span class="pl-k">=&gt;</span> {</td>
      </tr>
      <tr>
        <td id="L30" class="blob-num js-line-number" data-line-number="30"></td>
        <td id="LC30" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">const</span> <span class="pl-c1">logic</span> <span class="pl-k">=</span> {_add<span class="pl-k">:</span> [<span class="pl-c1">2</span>, <span class="pl-c1">3</span>]};</td>
      </tr>
      <tr>
        <td id="L31" class="blob-num js-line-number" data-line-number="31"></td>
        <td id="LC31" class="blob-code blob-code-inner js-file-line">      <span class="pl-en">expect</span>(<span class="pl-smi">jsonLogic</span>.<span class="pl-c1">apply</span>(logic)).<span class="pl-smi">to</span>.<span class="pl-smi">be</span>.<span class="pl-en">equal</span>(<span class="pl-c1">5</span>);</td>
      </tr>
      <tr>
        <td id="L32" class="blob-num js-line-number" data-line-number="32"></td>
        <td id="LC32" class="blob-code blob-code-inner js-file-line">    });</td>
      </tr>
      <tr>
        <td id="L33" class="blob-num js-line-number" data-line-number="33"></td>
        <td id="LC33" class="blob-code blob-code-inner js-file-line">    <span class="pl-en">it</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>ceil<span class="pl-pds">&#39;</span></span>, () <span class="pl-k">=&gt;</span> {</td>
      </tr>
      <tr>
        <td id="L34" class="blob-num js-line-number" data-line-number="34"></td>
        <td id="LC34" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">const</span> <span class="pl-c1">logic</span> <span class="pl-k">=</span> {_ceil<span class="pl-k">:</span> [<span class="pl-c1">4.006</span>]};</td>
      </tr>
      <tr>
        <td id="L35" class="blob-num js-line-number" data-line-number="35"></td>
        <td id="LC35" class="blob-code blob-code-inner js-file-line">      <span class="pl-en">expect</span>(<span class="pl-smi">jsonLogic</span>.<span class="pl-c1">apply</span>(logic)).<span class="pl-smi">to</span>.<span class="pl-smi">be</span>.<span class="pl-en">equal</span>(<span class="pl-c1">5</span>);</td>
      </tr>
      <tr>
        <td id="L36" class="blob-num js-line-number" data-line-number="36"></td>
        <td id="LC36" class="blob-code blob-code-inner js-file-line">    });</td>
      </tr>
      <tr>
        <td id="L37" class="blob-num js-line-number" data-line-number="37"></td>
        <td id="LC37" class="blob-code blob-code-inner js-file-line">    <span class="pl-en">it</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>divide<span class="pl-pds">&#39;</span></span>, () <span class="pl-k">=&gt;</span> {</td>
      </tr>
      <tr>
        <td id="L38" class="blob-num js-line-number" data-line-number="38"></td>
        <td id="LC38" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">const</span> <span class="pl-c1">logic</span> <span class="pl-k">=</span> {_divide<span class="pl-k">:</span> [<span class="pl-c1">6</span>, <span class="pl-c1">3</span>]};</td>
      </tr>
      <tr>
        <td id="L39" class="blob-num js-line-number" data-line-number="39"></td>
        <td id="LC39" class="blob-code blob-code-inner js-file-line">      <span class="pl-en">expect</span>(<span class="pl-smi">jsonLogic</span>.<span class="pl-c1">apply</span>(logic)).<span class="pl-smi">to</span>.<span class="pl-smi">be</span>.<span class="pl-en">equal</span>(<span class="pl-c1">2</span>);</td>
      </tr>
      <tr>
        <td id="L40" class="blob-num js-line-number" data-line-number="40"></td>
        <td id="LC40" class="blob-code blob-code-inner js-file-line">    });</td>
      </tr>
      <tr>
        <td id="L41" class="blob-num js-line-number" data-line-number="41"></td>
        <td id="LC41" class="blob-code blob-code-inner js-file-line">    <span class="pl-en">it</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>floor<span class="pl-pds">&#39;</span></span>, () <span class="pl-k">=&gt;</span> {</td>
      </tr>
      <tr>
        <td id="L42" class="blob-num js-line-number" data-line-number="42"></td>
        <td id="LC42" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">const</span> <span class="pl-c1">logic</span> <span class="pl-k">=</span> {_floor<span class="pl-k">:</span> [<span class="pl-c1">4.906</span>]};</td>
      </tr>
      <tr>
        <td id="L43" class="blob-num js-line-number" data-line-number="43"></td>
        <td id="LC43" class="blob-code blob-code-inner js-file-line">      <span class="pl-en">expect</span>(<span class="pl-smi">jsonLogic</span>.<span class="pl-c1">apply</span>(logic)).<span class="pl-smi">to</span>.<span class="pl-smi">be</span>.<span class="pl-en">equal</span>(<span class="pl-c1">4</span>);</td>
      </tr>
      <tr>
        <td id="L44" class="blob-num js-line-number" data-line-number="44"></td>
        <td id="LC44" class="blob-code blob-code-inner js-file-line">    });</td>
      </tr>
      <tr>
        <td id="L45" class="blob-num js-line-number" data-line-number="45"></td>
        <td id="LC45" class="blob-code blob-code-inner js-file-line">    <span class="pl-en">it</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>max<span class="pl-pds">&#39;</span></span>, () <span class="pl-k">=&gt;</span> {</td>
      </tr>
      <tr>
        <td id="L46" class="blob-num js-line-number" data-line-number="46"></td>
        <td id="LC46" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">const</span> <span class="pl-c1">logic</span> <span class="pl-k">=</span> {_max<span class="pl-k">:</span> [[<span class="pl-c1">2</span>, <span class="pl-c1">5</span>, <span class="pl-c1">6</span>, <span class="pl-c1">3</span>]]};</td>
      </tr>
      <tr>
        <td id="L47" class="blob-num js-line-number" data-line-number="47"></td>
        <td id="LC47" class="blob-code blob-code-inner js-file-line">      <span class="pl-en">expect</span>(<span class="pl-smi">jsonLogic</span>.<span class="pl-c1">apply</span>(logic)).<span class="pl-smi">to</span>.<span class="pl-smi">be</span>.<span class="pl-en">equal</span>(<span class="pl-c1">6</span>);</td>
      </tr>
      <tr>
        <td id="L48" class="blob-num js-line-number" data-line-number="48"></td>
        <td id="LC48" class="blob-code blob-code-inner js-file-line">    });</td>
      </tr>
      <tr>
        <td id="L49" class="blob-num js-line-number" data-line-number="49"></td>
        <td id="LC49" class="blob-code blob-code-inner js-file-line">    <span class="pl-en">it</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>maxBy<span class="pl-pds">&#39;</span></span>, () <span class="pl-k">=&gt;</span> {</td>
      </tr>
      <tr>
        <td id="L50" class="blob-num js-line-number" data-line-number="50"></td>
        <td id="LC50" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">const</span> <span class="pl-c1">data</span> <span class="pl-k">=</span> [{n<span class="pl-k">:</span> <span class="pl-c1">4</span>}, {n<span class="pl-k">:</span> <span class="pl-c1">2</span>}, {n<span class="pl-k">:</span> <span class="pl-c1">8</span>}, {n<span class="pl-k">:</span> <span class="pl-c1">6</span>}];</td>
      </tr>
      <tr>
        <td id="L51" class="blob-num js-line-number" data-line-number="51"></td>
        <td id="LC51" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">const</span> <span class="pl-c1">logic1</span> <span class="pl-k">=</span> {_maxBy<span class="pl-k">:</span> [{<span class="pl-s"><span class="pl-pds">&#39;</span>var<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span>}, <span class="pl-s"><span class="pl-pds">&#39;</span>n<span class="pl-pds">&#39;</span></span>]};</td>
      </tr>
      <tr>
        <td id="L52" class="blob-num js-line-number" data-line-number="52"></td>
        <td id="LC52" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">const</span> <span class="pl-c1">logic2</span> <span class="pl-k">=</span> {_maxBy<span class="pl-k">:</span> [{<span class="pl-s"><span class="pl-pds">&#39;</span>var<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span>}, {_property<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>n<span class="pl-pds">&#39;</span></span>}]};</td>
      </tr>
      <tr>
        <td id="L53" class="blob-num js-line-number" data-line-number="53"></td>
        <td id="LC53" class="blob-code blob-code-inner js-file-line">      <span class="pl-en">expect</span>(<span class="pl-smi">jsonLogic</span>.<span class="pl-c1">apply</span>(logic1, data)).<span class="pl-smi">to</span>.<span class="pl-smi">be</span>.<span class="pl-en">equal</span>(data[<span class="pl-c1">2</span>]);</td>
      </tr>
      <tr>
        <td id="L54" class="blob-num js-line-number" data-line-number="54"></td>
        <td id="LC54" class="blob-code blob-code-inner js-file-line">      <span class="pl-en">expect</span>(<span class="pl-smi">jsonLogic</span>.<span class="pl-c1">apply</span>(logic2, data)).<span class="pl-smi">to</span>.<span class="pl-smi">be</span>.<span class="pl-en">equal</span>(data[<span class="pl-c1">2</span>]);</td>
      </tr>
      <tr>
        <td id="L55" class="blob-num js-line-number" data-line-number="55"></td>
        <td id="LC55" class="blob-code blob-code-inner js-file-line">    });</td>
      </tr>
      <tr>
        <td id="L56" class="blob-num js-line-number" data-line-number="56"></td>
        <td id="LC56" class="blob-code blob-code-inner js-file-line">    <span class="pl-en">it</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>mean<span class="pl-pds">&#39;</span></span>, () <span class="pl-k">=&gt;</span> {</td>
      </tr>
      <tr>
        <td id="L57" class="blob-num js-line-number" data-line-number="57"></td>
        <td id="LC57" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">const</span> <span class="pl-c1">logic</span> <span class="pl-k">=</span> {_mean<span class="pl-k">:</span> [[<span class="pl-c1">2</span>, <span class="pl-c1">5</span>, <span class="pl-c1">6</span>, <span class="pl-c1">3</span>]]};</td>
      </tr>
      <tr>
        <td id="L58" class="blob-num js-line-number" data-line-number="58"></td>
        <td id="LC58" class="blob-code blob-code-inner js-file-line">      <span class="pl-en">expect</span>(<span class="pl-smi">jsonLogic</span>.<span class="pl-c1">apply</span>(logic)).<span class="pl-smi">to</span>.<span class="pl-smi">be</span>.<span class="pl-en">equal</span>(<span class="pl-c1">4</span>);</td>
      </tr>
      <tr>
        <td id="L59" class="blob-num js-line-number" data-line-number="59"></td>
        <td id="LC59" class="blob-code blob-code-inner js-file-line">    });</td>
      </tr>
      <tr>
        <td id="L60" class="blob-num js-line-number" data-line-number="60"></td>
        <td id="LC60" class="blob-code blob-code-inner js-file-line">    <span class="pl-en">it</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>meanBy<span class="pl-pds">&#39;</span></span>, () <span class="pl-k">=&gt;</span> {</td>
      </tr>
      <tr>
        <td id="L61" class="blob-num js-line-number" data-line-number="61"></td>
        <td id="LC61" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">const</span> <span class="pl-c1">data</span> <span class="pl-k">=</span> [{n<span class="pl-k">:</span> <span class="pl-c1">4</span>}, {n<span class="pl-k">:</span> <span class="pl-c1">2</span>}, {n<span class="pl-k">:</span> <span class="pl-c1">8</span>}, {n<span class="pl-k">:</span> <span class="pl-c1">6</span>}];</td>
      </tr>
      <tr>
        <td id="L62" class="blob-num js-line-number" data-line-number="62"></td>
        <td id="LC62" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">const</span> <span class="pl-c1">logic1</span> <span class="pl-k">=</span> {_meanBy<span class="pl-k">:</span> [{<span class="pl-s"><span class="pl-pds">&#39;</span>var<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span>}, <span class="pl-s"><span class="pl-pds">&#39;</span>n<span class="pl-pds">&#39;</span></span>]};</td>
      </tr>
      <tr>
        <td id="L63" class="blob-num js-line-number" data-line-number="63"></td>
        <td id="LC63" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">const</span> <span class="pl-c1">logic2</span> <span class="pl-k">=</span> {_meanBy<span class="pl-k">:</span> [{<span class="pl-s"><span class="pl-pds">&#39;</span>var<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span>}, {_property<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>n<span class="pl-pds">&#39;</span></span>}]};</td>
      </tr>
      <tr>
        <td id="L64" class="blob-num js-line-number" data-line-number="64"></td>
        <td id="LC64" class="blob-code blob-code-inner js-file-line">      <span class="pl-en">expect</span>(<span class="pl-smi">jsonLogic</span>.<span class="pl-c1">apply</span>(logic1, data)).<span class="pl-smi">to</span>.<span class="pl-smi">be</span>.<span class="pl-en">equal</span>(<span class="pl-c1">5</span>);</td>
      </tr>
      <tr>
        <td id="L65" class="blob-num js-line-number" data-line-number="65"></td>
        <td id="LC65" class="blob-code blob-code-inner js-file-line">      <span class="pl-en">expect</span>(<span class="pl-smi">jsonLogic</span>.<span class="pl-c1">apply</span>(logic2, data)).<span class="pl-smi">to</span>.<span class="pl-smi">be</span>.<span class="pl-en">equal</span>(<span class="pl-c1">5</span>);</td>
      </tr>
      <tr>
        <td id="L66" class="blob-num js-line-number" data-line-number="66"></td>
        <td id="LC66" class="blob-code blob-code-inner js-file-line">    });</td>
      </tr>
      <tr>
        <td id="L67" class="blob-num js-line-number" data-line-number="67"></td>
        <td id="LC67" class="blob-code blob-code-inner js-file-line">    <span class="pl-en">it</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>min<span class="pl-pds">&#39;</span></span>, () <span class="pl-k">=&gt;</span> {</td>
      </tr>
      <tr>
        <td id="L68" class="blob-num js-line-number" data-line-number="68"></td>
        <td id="LC68" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">const</span> <span class="pl-c1">logic</span> <span class="pl-k">=</span> {_min<span class="pl-k">:</span> [[<span class="pl-c1">2</span>, <span class="pl-c1">5</span>, <span class="pl-c1">6</span>, <span class="pl-c1">3</span>]]};</td>
      </tr>
      <tr>
        <td id="L69" class="blob-num js-line-number" data-line-number="69"></td>
        <td id="LC69" class="blob-code blob-code-inner js-file-line">      <span class="pl-en">expect</span>(<span class="pl-smi">jsonLogic</span>.<span class="pl-c1">apply</span>(logic)).<span class="pl-smi">to</span>.<span class="pl-smi">be</span>.<span class="pl-en">equal</span>(<span class="pl-c1">2</span>);</td>
      </tr>
      <tr>
        <td id="L70" class="blob-num js-line-number" data-line-number="70"></td>
        <td id="LC70" class="blob-code blob-code-inner js-file-line">    });</td>
      </tr>
      <tr>
        <td id="L71" class="blob-num js-line-number" data-line-number="71"></td>
        <td id="LC71" class="blob-code blob-code-inner js-file-line">    <span class="pl-en">it</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>minBy<span class="pl-pds">&#39;</span></span>, () <span class="pl-k">=&gt;</span> {</td>
      </tr>
      <tr>
        <td id="L72" class="blob-num js-line-number" data-line-number="72"></td>
        <td id="LC72" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">const</span> <span class="pl-c1">data</span> <span class="pl-k">=</span> [{n<span class="pl-k">:</span> <span class="pl-c1">4</span>}, {n<span class="pl-k">:</span> <span class="pl-c1">2</span>}, {n<span class="pl-k">:</span> <span class="pl-c1">8</span>}, {n<span class="pl-k">:</span> <span class="pl-c1">6</span>}];</td>
      </tr>
      <tr>
        <td id="L73" class="blob-num js-line-number" data-line-number="73"></td>
        <td id="LC73" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">const</span> <span class="pl-c1">logic1</span> <span class="pl-k">=</span> {_minBy<span class="pl-k">:</span> [{<span class="pl-s"><span class="pl-pds">&#39;</span>var<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span>}, <span class="pl-s"><span class="pl-pds">&#39;</span>n<span class="pl-pds">&#39;</span></span>]};</td>
      </tr>
      <tr>
        <td id="L74" class="blob-num js-line-number" data-line-number="74"></td>
        <td id="LC74" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">const</span> <span class="pl-c1">logic2</span> <span class="pl-k">=</span> {_minBy<span class="pl-k">:</span> [{<span class="pl-s"><span class="pl-pds">&#39;</span>var<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span>}, {_property<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>n<span class="pl-pds">&#39;</span></span>}]};</td>
      </tr>
      <tr>
        <td id="L75" class="blob-num js-line-number" data-line-number="75"></td>
        <td id="LC75" class="blob-code blob-code-inner js-file-line">      <span class="pl-en">expect</span>(<span class="pl-smi">jsonLogic</span>.<span class="pl-c1">apply</span>(logic1, data)).<span class="pl-smi">to</span>.<span class="pl-smi">be</span>.<span class="pl-en">equal</span>(data[<span class="pl-c1">1</span>]);</td>
      </tr>
      <tr>
        <td id="L76" class="blob-num js-line-number" data-line-number="76"></td>
        <td id="LC76" class="blob-code blob-code-inner js-file-line">      <span class="pl-en">expect</span>(<span class="pl-smi">jsonLogic</span>.<span class="pl-c1">apply</span>(logic2, data)).<span class="pl-smi">to</span>.<span class="pl-smi">be</span>.<span class="pl-en">equal</span>(data[<span class="pl-c1">1</span>]);</td>
      </tr>
      <tr>
        <td id="L77" class="blob-num js-line-number" data-line-number="77"></td>
        <td id="LC77" class="blob-code blob-code-inner js-file-line">    });</td>
      </tr>
      <tr>
        <td id="L78" class="blob-num js-line-number" data-line-number="78"></td>
        <td id="LC78" class="blob-code blob-code-inner js-file-line">    <span class="pl-en">it</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>multiply<span class="pl-pds">&#39;</span></span>, () <span class="pl-k">=&gt;</span> {</td>
      </tr>
      <tr>
        <td id="L79" class="blob-num js-line-number" data-line-number="79"></td>
        <td id="LC79" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">const</span> <span class="pl-c1">logic</span> <span class="pl-k">=</span> {_multiply<span class="pl-k">:</span> [<span class="pl-c1">2</span>, <span class="pl-c1">3</span>]};</td>
      </tr>
      <tr>
        <td id="L80" class="blob-num js-line-number" data-line-number="80"></td>
        <td id="LC80" class="blob-code blob-code-inner js-file-line">      <span class="pl-en">expect</span>(<span class="pl-smi">jsonLogic</span>.<span class="pl-c1">apply</span>(logic)).<span class="pl-smi">to</span>.<span class="pl-smi">be</span>.<span class="pl-en">equal</span>(<span class="pl-c1">6</span>);</td>
      </tr>
      <tr>
        <td id="L81" class="blob-num js-line-number" data-line-number="81"></td>
        <td id="LC81" class="blob-code blob-code-inner js-file-line">    });</td>
      </tr>
      <tr>
        <td id="L82" class="blob-num js-line-number" data-line-number="82"></td>
        <td id="LC82" class="blob-code blob-code-inner js-file-line">    <span class="pl-en">it</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>round<span class="pl-pds">&#39;</span></span>, () <span class="pl-k">=&gt;</span> {</td>
      </tr>
      <tr>
        <td id="L83" class="blob-num js-line-number" data-line-number="83"></td>
        <td id="LC83" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">const</span> <span class="pl-c1">logic1</span> <span class="pl-k">=</span> {_round<span class="pl-k">:</span> [<span class="pl-c1">4.006</span>]};</td>
      </tr>
      <tr>
        <td id="L84" class="blob-num js-line-number" data-line-number="84"></td>
        <td id="LC84" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">const</span> <span class="pl-c1">logic2</span> <span class="pl-k">=</span> {_round<span class="pl-k">:</span> [<span class="pl-c1">4.906</span>]};</td>
      </tr>
      <tr>
        <td id="L85" class="blob-num js-line-number" data-line-number="85"></td>
        <td id="LC85" class="blob-code blob-code-inner js-file-line">      <span class="pl-en">expect</span>(<span class="pl-smi">jsonLogic</span>.<span class="pl-c1">apply</span>(logic1)).<span class="pl-smi">to</span>.<span class="pl-smi">be</span>.<span class="pl-en">equal</span>(<span class="pl-c1">4</span>);</td>
      </tr>
      <tr>
        <td id="L86" class="blob-num js-line-number" data-line-number="86"></td>
        <td id="LC86" class="blob-code blob-code-inner js-file-line">      <span class="pl-en">expect</span>(<span class="pl-smi">jsonLogic</span>.<span class="pl-c1">apply</span>(logic2)).<span class="pl-smi">to</span>.<span class="pl-smi">be</span>.<span class="pl-en">equal</span>(<span class="pl-c1">5</span>);</td>
      </tr>
      <tr>
        <td id="L87" class="blob-num js-line-number" data-line-number="87"></td>
        <td id="LC87" class="blob-code blob-code-inner js-file-line">    });</td>
      </tr>
      <tr>
        <td id="L88" class="blob-num js-line-number" data-line-number="88"></td>
        <td id="LC88" class="blob-code blob-code-inner js-file-line">    <span class="pl-en">it</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>multiply<span class="pl-pds">&#39;</span></span>, () <span class="pl-k">=&gt;</span> {</td>
      </tr>
      <tr>
        <td id="L89" class="blob-num js-line-number" data-line-number="89"></td>
        <td id="LC89" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">const</span> <span class="pl-c1">logic</span> <span class="pl-k">=</span> {_multiply<span class="pl-k">:</span> [<span class="pl-c1">2</span>, <span class="pl-c1">3</span>]};</td>
      </tr>
      <tr>
        <td id="L90" class="blob-num js-line-number" data-line-number="90"></td>
        <td id="LC90" class="blob-code blob-code-inner js-file-line">      <span class="pl-en">expect</span>(<span class="pl-smi">jsonLogic</span>.<span class="pl-c1">apply</span>(logic)).<span class="pl-smi">to</span>.<span class="pl-smi">be</span>.<span class="pl-en">equal</span>(<span class="pl-c1">6</span>);</td>
      </tr>
      <tr>
        <td id="L91" class="blob-num js-line-number" data-line-number="91"></td>
        <td id="LC91" class="blob-code blob-code-inner js-file-line">    });</td>
      </tr>
      <tr>
        <td id="L92" class="blob-num js-line-number" data-line-number="92"></td>
        <td id="LC92" class="blob-code blob-code-inner js-file-line">    <span class="pl-en">it</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>subtract<span class="pl-pds">&#39;</span></span>, () <span class="pl-k">=&gt;</span> {</td>
      </tr>
      <tr>
        <td id="L93" class="blob-num js-line-number" data-line-number="93"></td>
        <td id="LC93" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">const</span> <span class="pl-c1">logic</span> <span class="pl-k">=</span> {_subtract<span class="pl-k">:</span> [<span class="pl-c1">2</span>, <span class="pl-c1">3</span>]};</td>
      </tr>
      <tr>
        <td id="L94" class="blob-num js-line-number" data-line-number="94"></td>
        <td id="LC94" class="blob-code blob-code-inner js-file-line">      <span class="pl-en">expect</span>(<span class="pl-smi">jsonLogic</span>.<span class="pl-c1">apply</span>(logic)).<span class="pl-smi">to</span>.<span class="pl-smi">be</span>.<span class="pl-en">equal</span>(<span class="pl-k">-</span><span class="pl-c1">1</span>);</td>
      </tr>
      <tr>
        <td id="L95" class="blob-num js-line-number" data-line-number="95"></td>
        <td id="LC95" class="blob-code blob-code-inner js-file-line">    });</td>
      </tr>
      <tr>
        <td id="L96" class="blob-num js-line-number" data-line-number="96"></td>
        <td id="LC96" class="blob-code blob-code-inner js-file-line">    <span class="pl-en">it</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>sum<span class="pl-pds">&#39;</span></span>, () <span class="pl-k">=&gt;</span> {</td>
      </tr>
      <tr>
        <td id="L97" class="blob-num js-line-number" data-line-number="97"></td>
        <td id="LC97" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">const</span> <span class="pl-c1">logic</span> <span class="pl-k">=</span> {_sum<span class="pl-k">:</span> [[<span class="pl-c1">2</span>, <span class="pl-c1">3</span>]]};</td>
      </tr>
      <tr>
        <td id="L98" class="blob-num js-line-number" data-line-number="98"></td>
        <td id="LC98" class="blob-code blob-code-inner js-file-line">      <span class="pl-en">expect</span>(<span class="pl-smi">jsonLogic</span>.<span class="pl-c1">apply</span>(logic)).<span class="pl-smi">to</span>.<span class="pl-smi">be</span>.<span class="pl-en">equal</span>(<span class="pl-c1">5</span>);</td>
      </tr>
      <tr>
        <td id="L99" class="blob-num js-line-number" data-line-number="99"></td>
        <td id="LC99" class="blob-code blob-code-inner js-file-line">    });</td>
      </tr>
      <tr>
        <td id="L100" class="blob-num js-line-number" data-line-number="100"></td>
        <td id="LC100" class="blob-code blob-code-inner js-file-line">    <span class="pl-en">it</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>sumBy<span class="pl-pds">&#39;</span></span>, () <span class="pl-k">=&gt;</span> {</td>
      </tr>
      <tr>
        <td id="L101" class="blob-num js-line-number" data-line-number="101"></td>
        <td id="LC101" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">const</span> <span class="pl-c1">data</span> <span class="pl-k">=</span> [{n<span class="pl-k">:</span> <span class="pl-c1">4</span>}, {n<span class="pl-k">:</span> <span class="pl-c1">2</span>}, {n<span class="pl-k">:</span> <span class="pl-c1">8</span>}, {n<span class="pl-k">:</span> <span class="pl-c1">6</span>}];</td>
      </tr>
      <tr>
        <td id="L102" class="blob-num js-line-number" data-line-number="102"></td>
        <td id="LC102" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">const</span> <span class="pl-c1">logic1</span> <span class="pl-k">=</span> {_sumBy<span class="pl-k">:</span> [{<span class="pl-s"><span class="pl-pds">&#39;</span>var<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span>}, <span class="pl-s"><span class="pl-pds">&#39;</span>n<span class="pl-pds">&#39;</span></span>]};</td>
      </tr>
      <tr>
        <td id="L103" class="blob-num js-line-number" data-line-number="103"></td>
        <td id="LC103" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">const</span> <span class="pl-c1">logic2</span> <span class="pl-k">=</span> {_sumBy<span class="pl-k">:</span> [{<span class="pl-s"><span class="pl-pds">&#39;</span>var<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span>}, {_property<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>n<span class="pl-pds">&#39;</span></span>}]};</td>
      </tr>
      <tr>
        <td id="L104" class="blob-num js-line-number" data-line-number="104"></td>
        <td id="LC104" class="blob-code blob-code-inner js-file-line">      <span class="pl-en">expect</span>(<span class="pl-smi">jsonLogic</span>.<span class="pl-c1">apply</span>(logic1, data)).<span class="pl-smi">to</span>.<span class="pl-smi">be</span>.<span class="pl-en">equal</span>(<span class="pl-c1">20</span>);</td>
      </tr>
      <tr>
        <td id="L105" class="blob-num js-line-number" data-line-number="105"></td>
        <td id="LC105" class="blob-code blob-code-inner js-file-line">      <span class="pl-en">expect</span>(<span class="pl-smi">jsonLogic</span>.<span class="pl-c1">apply</span>(logic2, data)).<span class="pl-smi">to</span>.<span class="pl-smi">be</span>.<span class="pl-en">equal</span>(<span class="pl-c1">20</span>);</td>
      </tr>
      <tr>
        <td id="L106" class="blob-num js-line-number" data-line-number="106"></td>
        <td id="LC106" class="blob-code blob-code-inner js-file-line">    });</td>
      </tr>
      <tr>
        <td id="L107" class="blob-num js-line-number" data-line-number="107"></td>
        <td id="LC107" class="blob-code blob-code-inner js-file-line">  });</td>
      </tr>
      <tr>
        <td id="L108" class="blob-num js-line-number" data-line-number="108"></td>
        <td id="LC108" class="blob-code blob-code-inner js-file-line">  <span class="pl-en">describe</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>Number<span class="pl-pds">&#39;</span></span>, () <span class="pl-k">=&gt;</span> {</td>
      </tr>
      <tr>
        <td id="L109" class="blob-num js-line-number" data-line-number="109"></td>
        <td id="LC109" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L110" class="blob-num js-line-number" data-line-number="110"></td>
        <td id="LC110" class="blob-code blob-code-inner js-file-line">  });</td>
      </tr>
      <tr>
        <td id="L111" class="blob-num js-line-number" data-line-number="111"></td>
        <td id="LC111" class="blob-code blob-code-inner js-file-line">  <span class="pl-en">describe</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>Object<span class="pl-pds">&#39;</span></span>, () <span class="pl-k">=&gt;</span> {</td>
      </tr>
      <tr>
        <td id="L112" class="blob-num js-line-number" data-line-number="112"></td>
        <td id="LC112" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L113" class="blob-num js-line-number" data-line-number="113"></td>
        <td id="LC113" class="blob-code blob-code-inner js-file-line">  });</td>
      </tr>
      <tr>
        <td id="L114" class="blob-num js-line-number" data-line-number="114"></td>
        <td id="LC114" class="blob-code blob-code-inner js-file-line">  <span class="pl-en">describe</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>String<span class="pl-pds">&#39;</span></span>, () <span class="pl-k">=&gt;</span> {</td>
      </tr>
      <tr>
        <td id="L115" class="blob-num js-line-number" data-line-number="115"></td>
        <td id="LC115" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L116" class="blob-num js-line-number" data-line-number="116"></td>
        <td id="LC116" class="blob-code blob-code-inner js-file-line">  });</td>
      </tr>
      <tr>
        <td id="L117" class="blob-num js-line-number" data-line-number="117"></td>
        <td id="LC117" class="blob-code blob-code-inner js-file-line">  <span class="pl-en">describe</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>Util<span class="pl-pds">&#39;</span></span>, () <span class="pl-k">=&gt;</span> {</td>
      </tr>
      <tr>
        <td id="L118" class="blob-num js-line-number" data-line-number="118"></td>
        <td id="LC118" class="blob-code blob-code-inner js-file-line">    <span class="pl-en">it</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>property<span class="pl-pds">&#39;</span></span>, () <span class="pl-k">=&gt;</span> {</td>
      </tr>
      <tr>
        <td id="L119" class="blob-num js-line-number" data-line-number="119"></td>
        <td id="LC119" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">const</span> <span class="pl-c1">data</span> <span class="pl-k">=</span> [</td>
      </tr>
      <tr>
        <td id="L120" class="blob-num js-line-number" data-line-number="120"></td>
        <td id="LC120" class="blob-code blob-code-inner js-file-line">        {<span class="pl-s"><span class="pl-pds">&#39;</span>a<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span> {<span class="pl-s"><span class="pl-pds">&#39;</span>b<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span> <span class="pl-c1">2</span>}},</td>
      </tr>
      <tr>
        <td id="L121" class="blob-num js-line-number" data-line-number="121"></td>
        <td id="LC121" class="blob-code blob-code-inner js-file-line">        {<span class="pl-s"><span class="pl-pds">&#39;</span>a<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span> {<span class="pl-s"><span class="pl-pds">&#39;</span>b<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span> <span class="pl-c1">1</span>}}</td>
      </tr>
      <tr>
        <td id="L122" class="blob-num js-line-number" data-line-number="122"></td>
        <td id="LC122" class="blob-code blob-code-inner js-file-line">      ];</td>
      </tr>
      <tr>
        <td id="L123" class="blob-num js-line-number" data-line-number="123"></td>
        <td id="LC123" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">const</span> <span class="pl-c1">logic</span> <span class="pl-k">=</span> {_sumBy<span class="pl-k">:</span> [{<span class="pl-s"><span class="pl-pds">&#39;</span>var<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span>}, {_property<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>a.b<span class="pl-pds">&#39;</span></span>}]};</td>
      </tr>
      <tr>
        <td id="L124" class="blob-num js-line-number" data-line-number="124"></td>
        <td id="LC124" class="blob-code blob-code-inner js-file-line">      <span class="pl-en">expect</span>(<span class="pl-smi">jsonLogic</span>.<span class="pl-c1">apply</span>(logic, data)).<span class="pl-smi">to</span>.<span class="pl-smi">be</span>.<span class="pl-en">equal</span>(<span class="pl-c1">3</span>);</td>
      </tr>
      <tr>
        <td id="L125" class="blob-num js-line-number" data-line-number="125"></td>
        <td id="LC125" class="blob-code blob-code-inner js-file-line">    });</td>
      </tr>
      <tr>
        <td id="L126" class="blob-num js-line-number" data-line-number="126"></td>
        <td id="LC126" class="blob-code blob-code-inner js-file-line">  });</td>
      </tr>
      <tr>
        <td id="L127" class="blob-num js-line-number" data-line-number="127"></td>
        <td id="LC127" class="blob-code blob-code-inner js-file-line">});</td>
      </tr>
</table>

  <div class="BlobToolbar position-absolute js-file-line-actions dropdown js-menu-container js-select-menu d-none" aria-hidden="true">
    <button class="btn-octicon ml-0 px-2 p-0 bg-white border border-gray-dark rounded-1 dropdown-toggle js-menu-target" type="button" aria-expanded="false" aria-haspopup="true" aria-label="Inline file action toolbar" aria-controls="inline-file-actions">
      <svg class="octicon octicon-kebab-horizontal" viewBox="0 0 13 16" version="1.1" width="13" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M1.5 9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"/></svg>
    </button>
    <div class="dropdown-menu-content js-menu-content" id="inline-file-actions">
      <ul class="BlobToolbar-dropdown dropdown-menu dropdown-menu-se mt-2">
        <li><clipboard-copy class="dropdown-item" id="js-copy-lines" style="cursor:pointer;" data-original-text="Copy lines">Copy lines</clipboard-copy></li>
        <li><clipboard-copy class="dropdown-item" id="js-copy-permalink" style="cursor:pointer;" data-original-text="Copy permalink">Copy permalink</clipboard-copy></li>
        <li><a class="dropdown-item js-update-url-with-hash" id="js-view-git-blame" href="/formio/formio.js/blame/9f39f138a67e70d88d7540e1d330b0ceb2ab01b4/src/utils/jsonlogic/operators.spec.js">View git blame</a></li>
          <li><a class="dropdown-item" id="js-new-issue" href="/formio/formio.js/issues/new">Open new issue</a></li>
      </ul>
    </div>
  </div>

  </div>

  </div>

  <button type="button" data-facebox="#jump-to-line" data-facebox-class="linejump" data-hotkey="l" class="d-none">Jump to Line</button>
  <div id="jump-to-line" style="display:none">
    <!-- '"` --><!-- </textarea></xmp> --></option></form><form class="js-jump-to-line-form" action="" accept-charset="UTF-8" method="get"><input name="utf8" type="hidden" value="&#x2713;" />
      <input class="form-control linejump-input js-jump-to-line-field" type="text" placeholder="Jump to line&hellip;" aria-label="Jump to line" autofocus>
      <button type="submit" class="btn">Go</button>
</form>  </div>


  </div>
  <div class="modal-backdrop js-touch-events"></div>
</div>

    </div>
  </div>

  </div>

      
<div class="footer container-lg px-3" role="contentinfo">
  <div class="position-relative d-flex flex-justify-between pt-6 pb-2 mt-6 f6 text-gray border-top border-gray-light ">
    <ul class="list-style-none d-flex flex-wrap ">
      <li class="mr-3">&copy; 2018 <span title="0.31389s from unicorn-721671645-2ckm2">GitHub</span>, Inc.</li>
        <li class="mr-3"><a data-ga-click="Footer, go to terms, text:terms" href="https://github.com/site/terms">Terms</a></li>
        <li class="mr-3"><a data-ga-click="Footer, go to privacy, text:privacy" href="https://github.com/site/privacy">Privacy</a></li>
        <li class="mr-3"><a href="https://help.github.com/articles/github-security/" data-ga-click="Footer, go to security, text:security">Security</a></li>
        <li class="mr-3"><a href="https://status.github.com/" data-ga-click="Footer, go to status, text:status">Status</a></li>
        <li><a data-ga-click="Footer, go to help, text:help" href="https://help.github.com">Help</a></li>
    </ul>

    <a aria-label="Homepage" title="GitHub" class="footer-octicon" href="https://github.com">
      <svg height="24" class="octicon octicon-mark-github" viewBox="0 0 16 16" version="1.1" width="24" aria-hidden="true"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"/></svg>
</a>
   <ul class="list-style-none d-flex flex-wrap ">
        <li class="mr-3"><a data-ga-click="Footer, go to contact, text:contact" href="https://github.com/contact">Contact GitHub</a></li>
      <li class="mr-3"><a href="https://developer.github.com" data-ga-click="Footer, go to api, text:api">API</a></li>
      <li class="mr-3"><a href="https://training.github.com" data-ga-click="Footer, go to training, text:training">Training</a></li>
      <li class="mr-3"><a href="https://shop.github.com" data-ga-click="Footer, go to shop, text:shop">Shop</a></li>
        <li class="mr-3"><a href="https://blog.github.com" data-ga-click="Footer, go to blog, text:blog">Blog</a></li>
        <li><a data-ga-click="Footer, go to about, text:about" href="https://github.com/about">About</a></li>

    </ul>
  </div>
  <div class="d-flex flex-justify-center pb-6">
    <span class="f6 text-gray-light"></span>
  </div>
</div>



  <div id="ajax-error-message" class="ajax-error-message flash flash-error">
    <svg class="octicon octicon-alert" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M8.865 1.52c-.18-.31-.51-.5-.87-.5s-.69.19-.87.5L.275 13.5c-.18.31-.18.69 0 1 .19.31.52.5.87.5h13.7c.36 0 .69-.19.86-.5.17-.31.18-.69.01-1L8.865 1.52zM8.995 13h-2v-2h2v2zm0-3h-2V6h2v4z"/></svg>
    <button type="button" class="flash-close js-ajax-error-dismiss" aria-label="Dismiss error">
      <svg class="octicon octicon-x" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48z"/></svg>
    </button>
    You can’t perform that action at this time.
  </div>


    <script crossorigin="anonymous" integrity="sha512-2GVr5rsbbfKbHM6oRrri41+qJ2ltJBCqluASS29fj+9yHGLFmFhq0C64VMdL57UJ34G2+FXU+8FZhaAOnsCEhw==" type="application/javascript" src="https://assets-cdn.github.com/assets/compat-bb7abfb15ed4ffb0da9056d4c980fba5.js"></script>
    <script crossorigin="anonymous" integrity="sha512-EST2K47MuXo8oWVqCyU58ZnnvZTPcd7fM//26jWjgrjqTGi2yJp6mZNYuwYk+K6d2r9bt7qT4uYCz2VMXS0j/Q==" type="application/javascript" src="https://assets-cdn.github.com/assets/frameworks-27d1acefde8235024615b1326306ab81.js"></script>
    
    <script crossorigin="anonymous" async="async" integrity="sha512-PJQJ4tcJGzNdweWUf1gj8G3Qka9PD/rMqrsj6doQfz2T+kNCXpOD3HKoPilGBbkizc28sx+zEytm4qLgIWSxdw==" type="application/javascript" src="https://assets-cdn.github.com/assets/github-8a2aee799e9b858e966f314cf55893dc.js"></script>
    
    
    
    
  <div class="js-stale-session-flash stale-session-flash flash flash-warn flash-banner d-none">
    <svg class="octicon octicon-alert" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M8.865 1.52c-.18-.31-.51-.5-.87-.5s-.69.19-.87.5L.275 13.5c-.18.31-.18.69 0 1 .19.31.52.5.87.5h13.7c.36 0 .69-.19.86-.5.17-.31.18-.69.01-1L8.865 1.52zM8.995 13h-2v-2h2v2zm0-3h-2V6h2v4z"/></svg>
    <span class="signed-in-tab-flash">You signed in with another tab or window. <a href="">Reload</a> to refresh your session.</span>
    <span class="signed-out-tab-flash">You signed out in another tab or window. <a href="">Reload</a> to refresh your session.</span>
  </div>
  <div class="facebox" id="facebox" style="display:none;">
  <div class="facebox-popup">
    <div class="facebox-content" role="dialog" aria-labelledby="facebox-header" aria-describedby="facebox-description">
    </div>
    <button type="button" class="facebox-close js-facebox-close" aria-label="Close modal">
      <svg class="octicon octicon-x" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48z"/></svg>
    </button>
  </div>
</div>

  <div class="Popover js-hovercard-content position-absolute" style="display: none; outline: none;" tabindex="0">
  <div class="Popover-message Popover-message--bottom-left Popover-message--large Box box-shadow-large" style="width:360px;">
  </div>
</div>

<div id="hovercard-aria-description" class="sr-only">
  Press h to open a hovercard with more details.
</div>


  </body>
</html>

