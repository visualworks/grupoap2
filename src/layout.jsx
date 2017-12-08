import React, {Component} from "react";
import App from "app";

export default class Layout extends App {
    render() {
        return (
            <section className="hero is-fullheight">
                <div className="hero-body">
                    <div className="container has-text-centered">
                        <h1 className="title"><img src="img/logo-grupoap2.png" alt="Grupo AP2" title="Grupo AP2" className="img-logo" /></h1>
                        <div class="fb-page" data-href="https://www.facebook.com/assessoriaAP2/" data-small-header="true" data-adapt-container-width="true" data-hide-cover="true" data-show-facepile="false">
                            <blockquote cite="https://www.facebook.com/assessoriaAP2/" class="fb-xfbml-parse-ignore">
                                <a href="https://www.facebook.com/assessoriaAP2/">Grupo AP2</a>
                            </blockquote>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}