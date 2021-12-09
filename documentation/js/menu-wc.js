'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">shop-project documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-f38a6436777849366babe78e8480d63d23006d8528bb2125b017aad4706f741959c0e68e7ff9925b433369f77fac84709acf6096655670388a24bff6095c8aa2"' : 'data-target="#xs-components-links-module-AppModule-f38a6436777849366babe78e8480d63d23006d8528bb2125b017aad4706f741959c0e68e7ff9925b433369f77fac84709acf6096655670388a24bff6095c8aa2"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-f38a6436777849366babe78e8480d63d23006d8528bb2125b017aad4706f741959c0e68e7ff9925b433369f77fac84709acf6096655670388a24bff6095c8aa2"' :
                                            'id="xs-components-links-module-AppModule-f38a6436777849366babe78e8480d63d23006d8528bb2125b017aad4706f741959c0e68e7ff9925b433369f77fac84709acf6096655670388a24bff6095c8aa2"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HeaderComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HeaderComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NotFoundComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NotFoundComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppProductModule.html" data-type="entity-link" >AppProductModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppProductModule-9001e9eedb02de705eefbdc95ef328b52fabc5c375f327fd4cf8b4b24afb15c21adbd17fcc8946721be4502ffed9e6c33a40e34a92a5593e4d2f1efb75b1047f"' : 'data-target="#xs-components-links-module-AppProductModule-9001e9eedb02de705eefbdc95ef328b52fabc5c375f327fd4cf8b4b24afb15c21adbd17fcc8946721be4502ffed9e6c33a40e34a92a5593e4d2f1efb75b1047f"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppProductModule-9001e9eedb02de705eefbdc95ef328b52fabc5c375f327fd4cf8b4b24afb15c21adbd17fcc8946721be4502ffed9e6c33a40e34a92a5593e4d2f1efb75b1047f"' :
                                            'id="xs-components-links-module-AppProductModule-9001e9eedb02de705eefbdc95ef328b52fabc5c375f327fd4cf8b4b24afb15c21adbd17fcc8946721be4502ffed9e6c33a40e34a92a5593e4d2f1efb75b1047f"' }>
                                            <li class="link">
                                                <a href="components/FormProductComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FormProductComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MainProductComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MainProductComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ProductComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProductComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppProductRoutingModule.html" data-type="entity-link" >AppProductRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link" >AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/AppUserModule.html" data-type="entity-link" >AppUserModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppUserModule-d1e0ab8ae1747b11d079a82e5f05691aea83a840197f1d1b849ef80be281fae5f8d2691975cc9adea69ef1ef4ed9bf5a3e11582801eb96ec247d078ccbd3e585"' : 'data-target="#xs-components-links-module-AppUserModule-d1e0ab8ae1747b11d079a82e5f05691aea83a840197f1d1b849ef80be281fae5f8d2691975cc9adea69ef1ef4ed9bf5a3e11582801eb96ec247d078ccbd3e585"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppUserModule-d1e0ab8ae1747b11d079a82e5f05691aea83a840197f1d1b849ef80be281fae5f8d2691975cc9adea69ef1ef4ed9bf5a3e11582801eb96ec247d078ccbd3e585"' :
                                            'id="xs-components-links-module-AppUserModule-d1e0ab8ae1747b11d079a82e5f05691aea83a840197f1d1b849ef80be281fae5f8d2691975cc9adea69ef1ef4ed9bf5a3e11582801eb96ec247d078ccbd3e585"' }>
                                            <li class="link">
                                                <a href="components/FormUserComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FormUserComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LoginComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LoginComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MainUserComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MainUserComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/UserListComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserListComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppUserRoutingModule.html" data-type="entity-link" >AppUserRoutingModule</a>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/Product.html" data-type="entity-link" >Product</a>
                            </li>
                            <li class="link">
                                <a href="classes/User.html" data-type="entity-link" >User</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AuthService.html" data-type="entity-link" >AuthService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ProductService.html" data-type="entity-link" >ProductService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UserService.html" data-type="entity-link" >UserService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});