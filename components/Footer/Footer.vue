<template>
  <div class="footer">
    <div class="footer-top ma-12">
      <div id="logo_footer">
        <Logo :src="'/logo_footer.png'" />
      </div>
      <div class="footer-top__social">
        <a href="https://www.facebook.com/tmforum" target="_blank">
          <v-icon color="#fff" size="24px">mdi-facebook</v-icon>
        </a>
        <a href="https://twitter.com/tmforumorg" target="_blank">
          <v-icon color="#fff" size="24px">mdi-twitter</v-icon>
        </a>
        <a href="https://www.linkedin.com/company/tm-forum/" target="_blank">
          <v-icon color="#fff" size="24px">mdi-linkedin</v-icon>
        </a>
        <a href="https://www.youtube.com/channel/UCLKFQ99UR0KRtF3BTQzurOw/videos" target="_blank">
          <v-icon color="#fff" size="24px">mdi-youtube</v-icon>
        </a>
      </div>
    </div>
    <div class="footer-bottom ma-12 mb-0 row">
      <div class="footer-bottom__section mb-8 col-md-3 col-sm-12">
        <Link :to="'/'">
          <div class="footer-bottom__section--label">About TM Forum</div>
        </Link>
        <a href="https://www.tmforum.org/about-tm-forum/">
          <div class="footer-bottom__section--links">About the Forum</div>
        </a>
        <a href="https://www.tmforum.org/about-tm-forum/legal-branding/website-privacy-policy/">
          <div class="footer-bottom__section--links">Privacy &amp; Policy</div>
        </a>
        <a href="https://www.tmforum.org/about-tm-forum/legal-branding/website-terms-and-conditions/">
          <div class="footer-bottom__section--links">
            Website T&amp;Cs and Cookies
          </div>
        </a>
      </div>
      <div class="footer-bottom__section mb-8 col-md-3 col-sm-12">
        <Link :to="'/'">
          <div class="footer-bottom__section--label">Explore inform</div>
        </Link>
        <a href="/">
          <div class="footer-bottom__section--links">Home</div>
        </a>
        <Link :to="{ name: 'topics' }">
          <div class="footer-bottom__section--links">Topics</div>
        </Link>
        <a href="/search">
          <div class="footer-bottom__section--links">Search</div>
        </a>
      </div>
      <div class="footer-bottom__section mb-8 col-md-6 col-sm-12">
        <div class="footer-bottom__section--label">Contact us</div>
        <div class="footer-bottom__section--triple-div row">
          <div class="footer-bottom__section--label__section col-md-4 col-12">
            <div class="footer-bottom__section--links">Ian Kemp</div>
            <div class="footer-bottom__section--links">Managing Editor</div>
            <div class="footer-bottom__section--links">
              <a href="mailto:ikemp@tmforum.org">
                <v-icon color="#fff" size="16px">mdi-email</v-icon>
              </a>
            </div>
          </div>
          <div class="footer-bottom__section--label__section col-md-4 col-12">
            <div class="footer-bottom__section--links">Joanne Taaffe</div>
            <div class="footer-bottom__section--links">Editor in Chief</div>
            <div class="footer-bottom__section--links">
              <a href="mailto:jtaaffe@tmforum.org">
                <v-icon color="#fff" size="16px">mdi-email</v-icon>
              </a>
            </div>
          </div>
          <div class="footer-bottom__section--label__section col-md-4 col-12">
            <div class="footer-bottom__section--links">Timothy Edwards</div>
            <div class="footer-bottom__section--links">Commercial Manager</div>
            <div class="footer-bottom__section--links">
              <a href="mailto:tedwards@tmforum.org ">
                <v-icon color="#fff" size="16px">mdi-email</v-icon>
              </a>
              <a href="#">
                <v-icon color="#fff" size="16px">mdi-phone</v-icon>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="footer-bottom__copyright row">
        <span class="footer-bottom__copyright-item">©2021 TM Forum</span>
        <span class="footer-bottom__copyright-item">About the Forum</span>
        <span class="footer-bottom__copyright-item">Terms of Use</span>
        <span class="footer-bottom__copyright-item">Privacy Policy</span>
        <span class="footer-bottom__copyright-item">Cookie Policy</span>
      </div>
    </div>
  </div>
</template>

<script>
import Logo from '../Logo/Logo'
import Link from '../Link/Link'

export default {
  name: 'Footer',
  components: { Link, Logo },
}
</script>

<style lang="scss" src="./Index.scss"></style>
