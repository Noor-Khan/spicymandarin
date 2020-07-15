<template>
  <div id="Privacy">
    <PageHeader />
    <section id="PrivacyPolicy" class="section">
      <el-row>
        <el-col :lg="16">
          <div class="main-heading">
            <h4>our privacy and policies</h4>
            <h2>Privacy & Policy</h2>
            <hr class="seperator" />
          </div>
          <div class="policy-content">
            <h3>What information do we collect?</h3>
            <hr class="sep" />
            <p>
              We collect information from you when you register on our site,
              place an order, subscribe to our newsletter, respond to a survey
              or fill out a form.
            </p>
            <p>
              When ordering or registering on our site, as appropriate, you may
              be asked to enter your: name or e-mail address. You may, however,
              visit our site anonymously.
            </p>
            <h3>What do we use your information for?</h3>
            <hr class="sep" />
            <p>
              Any of the information we collect from you may be used in one of
              the following ways:
            </p>
            <ul>
              <li>
                To personalize your experience: your information helps us to
                better respond to your individual needs.
              </li>
              <li>
                To improve our website: we continually strive to improve our
                website offerings based on the information and feedback we
                receive from you.
              </li>
              <li>
                To improve customer service: your information helps us to more
                effectively respond to your customer service requests and
                support needs.
              </li>
              <li>
                To process transactions: your information, whether public or
                private, will not be sold, exchanged, transferred, or given to
                any other company for any reason whatsoever, without your
                consent, other than for the express purpose of delivering the
                purchased product or service requested.
              </li>
              <li>
                To administer a contest, promotion, survey or other site
                feature.
              </li>
              <li>
                To send periodic emails: the email address you provide for order
                processing, may be used to send you information and updates
                pertaining to your order, in addition to receiving occasional
                company news, updates, related product or service information,
                etc.
              </li>
            </ul>
            <p>
              <strong>Note:</strong> If at any time you would like to
              unsubscribe from receiving future emails, we include detailed
              unsubscribe instructions at the bottom of each email.
            </p>
            <h3>How do we protect your information?</h3>
            <hr class="sep" />
            <p>
              We implement a variety of security measures to maintain the safety
              of your personal information when you place an order or enter,
              submit, or access your personal information.
            </p>
            <h3>Do we use cookies?</h3>
            <hr class="sep" />
            <p>
              Yes (Cookies are small files that a site or its service provider
              transfers to your computers hard drive through your Web browser
              (if you allow) that enables the sites or service providers systems
              to recognize your browser and capture and remember certain
              information.
            </p>
            <p>
              We use cookies to help us remember and process the items in your
              shopping cart, understand and save your preferences for future
              visits and compile aggregate data about site traffic and site
              interaction so that we can offer better site experiences and tools
              in the future.
            </p>
            <h3>Do we disclose any information to outside parties?</h3>
            <hr class="sep" />
            <p>
              We do not sell, trade, or otherwise transfer to outside parties
              your personally identifiable information. This does not include
              trusted third parties who assist us in operating our website,
              conducting our business, or servicing you, so long as those
              parties agree to keep this information confidential. We may also
              release your information when we believe release is appropriate to
              comply with the law, enforce our site policies, or protect ours or
              others rights, property, or safety. However, non-personally
              identifiable visitor information may be provided to other parties
              for marketing, advertising, or other uses.
            </p>
            <h3>Third party links</h3>
            <hr class="sep" />
            <p>
              Occasionally, at our discretion, we may include or offer third
              party products or services on our website. These third party sites
              have separate and independent privacy policies. We therefore have
              no responsibility or liability for the content and activities of
              these linked sites. Nonetheless, we seek to protect the integrity
              of our site and welcome any feedback about these sites.
            </p>
            <h3>California Online Privacy Protection Act Compliance</h3>
            <hr class="sep" />
            <p>
              Because we value your privacy we have taken the necessary
              precautions to be in compliance with the California Online Privacy
              Protection Act. We therefore will not distribute your personal
              information to outside parties without your consent.
            </p>
            <p>
              As part of the California Online Privacy Protection Act, all users
              of our site may make any changes to their information at anytime
              by logging into their control panel and going to the ‘Edit
              Profile’ page.
            </p>
            <h3>Childrens Online Privacy Protection Act Compliance</h3>
            <hr class="sep" />
            <p>
              We are in compliance with the requirements of COPPA (Childrens
              Online Privacy Protection Act), we do not collect any information
              from anyone under 13 years of age. Our website, products and
              services are all directed to people who are at least 13 years old
              or older.
            </p>
            <h3>Your Consent</h3>
            <hr class="sep" />
            <p>By using our site, you consent to our online privacy policy.</p>
            <h3>Changes to our Privacy Policy</h3>
            <hr class="sep" />
            <p>
              If we decide to change our privacy policy, we will update the
              Privacy Policy modification date belo
            </p>
            <p>This policy was last modified on 01 October 2012.</p>
            <h3>Contacting Us</h3>
            <hr class="sep" />
            <p>
              If there are any questions regarding this privacy policy you may
              contact us using the information below:
            </p>
            <p>
              <a href="#">spicy-inquiry@spicymandarin.com</a>
            </p>
          </div>
        </el-col>
      </el-row>
    </section>
  </div>
</template>
<script>
import PageHeader from "../../components/global/Header";
export default {
  components: {
    PageHeader
  }
};
</script>
<style lang="scss">
#PrivacyPolicy {
  margin-top: 70px;
  background-image: url("../../assets/icons/privacy.png");
  background-repeat: no-repeat;
  background-position: center right;
  .main-heading {
    text-align: left;
    margin-bottom: 20px;
    .seperator {
      margin: 15px 0;
    }
    h2 {
      font-weight: 400;
    }
  }
  .policy-content {
    margin-top: 4rem;
    text-align: left;
    h3 {
      text-transform: uppercase;
    }
    p {
      color: $black;
      line-height: 26px;
    }
    ul {
      li {
        color: $black;
        line-height: 30px;
      }
    }
    a {
      color: $primary;
    }
  }
  .privacy-img {
    position: relative;
    img {
      position: absolute;
      top: 50%;
    }
  }
}
</style>
