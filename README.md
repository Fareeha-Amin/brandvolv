<!-- <div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://ai.google.dev/static/site-assets/images/share-ais-513315318.png" />
</div> -->

# Brandvolv

Official website for BrandVolv, a digital marketing agency.

## 🌐 **Live:** https://brandvolv.com

## Booking email notifications

Booking requests are saved to Firestore and sent to the email address associated
with the configured Web3Forms access key. The current key should be associated
with `fareeha.amin23@gmail.com`. Set this Vite environment variable in the local
`.env.local` file and in the environment used to build the production site:

- `VITE_WEB3FORMS_ACCESS_KEY`

The booking notification includes these fields:

- `{{business_name}}`
- `{{full_name}}`
- `{{customer_email}}`
- `{{phone}}`
- `{{service_type}}`
- `{{monthly_ad_spend}}`
- `{{primary_bottleneck}}`
- `{{selected_day}}`
- `{{booking_id}}`
- `{{submitted_at}}`

Web3Forms access keys are intended for browser use. Restrict the allowed domain
and enable spam protection in the Web3Forms dashboard. The form reports email
delivery failures and keeps a saved lead from being duplicated when notification
delivery is retried.

<br/>
