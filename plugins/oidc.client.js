import {Log, UserManager} from "oidc-client-ts";

Log.setLogger(console);
Log.setLevel(Log.INFO);

export default async function({app}, inject) {
    const url = window.location.origin;
    const settings = {
        authority: app.$config.oidcHost + "/idp/oidc",
        client_id: app.$config.oidcClientId,
        redirect_uri: app.$config.oidcRedirectUrl,
        post_logout_redirect_uri: url + "/",
        response_type: "code",
        scope: "openid email profile address phone tmf",
        response_mode: "query",
        automaticSilentRenew: true,
        filterProtocolClaims: true,
        loadUserInfo: true
    }
    const mgr = new UserManager(settings);
    inject("oidc", mgr);

    // TODO: Set up events on the UserManager to set/update/delete stuff in vuex store

    /*
        If on the callback url, user has been redirected back from login
        so forward them on to whence they came (window.location.origin set above)
    */
    if (window.location.pathname == app.$config.oidcCallbackPath) {
        const user = await mgr.signinRedirectCallback()
        if (user.state.url !== undefined) {
            window.location.href = user.state.url
        }
    }
}
