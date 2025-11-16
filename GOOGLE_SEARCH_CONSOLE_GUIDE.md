# Google Search Console Setup & Indexing Guide

## Complete Setup Guide for UsergyAI Website SEO

This guide will walk you through setting up Google Search Console, submitting your sitemap, and manually requesting indexing for all 21 pages to accelerate search engine visibility.

---

## Part 1: Google Search Console Setup (15-20 minutes)

### Step 1: Create/Access Google Search Console Account

1. Go to [Google Search Console](https://search.google.com/search-console)
2. Sign in with your Google account (use a company Google account if available)
3. Click **"Add Property"** or **"Start Now"** if this is your first property

### Step 2: Verify Domain Ownership

**Recommended Method: DNS Verification (works for all subdomains)**

1. Select **"Domain"** property type (not "URL prefix")
2. Enter your domain: `usergy.ai`
3. Click **"Continue"**
4. Google will provide a TXT record to add to your DNS

**DNS Record Setup:**
- **Record Type:** TXT
- **Name/Host:** @ (or leave blank, depending on your DNS provider)
- **Value:** The verification string from Google (looks like `google-site-verification=xxxxxxxxxx`)
- **TTL:** Default or 3600

5. Go to your domain registrar's DNS management panel:
   - GoDaddy: Domains → My Domains → DNS → Add Record
   - Cloudflare: DNS → Add Record
   - Namecheap: Advanced DNS → Add New Record
   - Google Domains: DNS → Custom Records

6. Add the TXT record provided by Google
7. Wait 5-10 minutes for DNS propagation
8. Return to Google Search Console and click **"Verify"**

**Alternative Method: HTML File Upload**
- Download the verification HTML file from Google
- Upload to your website's root directory
- Access it at `https://usergy.ai/google-verification-file.html`
- Click "Verify" in Google Search Console

---

## Part 2: Submit Your Sitemap (5 minutes)

### Step 1: Submit Sitemap URL

1. In Google Search Console, click on your verified property
2. Navigate to **"Sitemaps"** in the left sidebar (under "Indexing")
3. In the "Add a new sitemap" field, enter: `sitemap.xml`
4. Click **"Submit"**

### Step 2: Verify Sitemap Success

- Status should show **"Success"** within a few minutes
- You should see **21 discovered URLs**
- If you see errors, check that `https://usergy.ai/sitemap.xml` is publicly accessible

**Expected Results:**
```
Sitemap: https://usergy.ai/sitemap.xml
Status: Success
Discovered URLs: 21
Last read: [Current date]
```

---

## Part 3: Request Indexing for All 21 Pages (20-30 minutes)

### Important Notes Before You Start:
- Google limits manual indexing requests to **~10 per day** for new properties
- You may need to spread requests over 2-3 days
- Prioritize high-value pages first (homepage, main solutions, contact)

### Priority 1: Core Pages (Day 1 - Request these first)

1. **Homepage**
   - URL: `https://usergy.ai/`
   - In GSC top bar, paste URL and click **"Request Indexing"**
   
2. **Contact Page**
   - URL: `https://usergy.ai/contact`
   
3. **Why Us Page**
   - URL: `https://usergy.ai/why-us`
   
4. **Solutions Landing**
   - URL: `https://usergy.ai/solutions`
   
5. **Projects Board**
   - URL: `https://usergy.ai/projects-board`

6. **Case Studies Landing**
   - URL: `https://usergy.ai/case-studies`

### Priority 2: Solution Pages (Day 1-2 - Continue if quota allows)

7. **Data Services**
   - URL: `https://usergy.ai/solutions/data-services`
   
8. **Quality Assurance**
   - URL: `https://usergy.ai/solutions/quality-assurance`
   
9. **Content Moderation**
   - URL: `https://usergy.ai/solutions/content-moderation`
   
10. **Multilingual Services**
    - URL: `https://usergy.ai/solutions/multilingual`
    
11. **Enterprise BPO**
    - URL: `https://usergy.ai/solutions/enterprise-bpo`
    
12. **Research & Insights**
    - URL: `https://usergy.ai/solutions/research-insights`

### Priority 3: Case Studies (Day 2-3)

13. **Healthcare AI - Diagnostic Accuracy**
    - URL: `https://usergy.ai/case-studies/healthcare-diagnostic-accuracy`
    
14. **Autonomous Vehicles - Edge Case Validation**
    - URL: `https://usergy.ai/case-studies/autonomous-edge-cases`
    
15. **Global SaaS - Multilingual Launch**
    - URL: `https://usergy.ai/case-studies/global-saas-multilingual`
    
16. **Voice AI - Cultural Context**
    - URL: `https://usergy.ai/case-studies/voice-ai-cultural-context`
    
17. **E-commerce - UX Testing**
    - URL: `https://usergy.ai/case-studies/ecommerce-ux-testing`
    
18. **Fintech - Model Validation**
    - URL: `https://usergy.ai/case-studies/fintech-model-validation`

### Priority 4: Legal Pages (Day 3)

19. **Privacy Policy**
    - URL: `https://usergy.ai/privacy-policy`
    
20. **Terms of Service**
    - URL: `https://usergy.ai/terms-of-service`
    
21. **Cookie Policy**
    - URL: `https://usergy.ai/cookie-policy`

---

## How to Request Indexing (Step-by-Step)

1. **Access URL Inspection Tool:**
   - In Google Search Console, look for the search bar at the very top
   - It says "Inspect any URL in [your property]"

2. **Enter the URL:**
   - Paste the full URL (e.g., `https://usergy.ai/contact`)
   - Press Enter

3. **Wait for Initial Check:**
   - Google will check if the URL is already indexed
   - This takes 10-30 seconds

4. **Request Indexing:**
   - If **"URL is not on Google"**: Click **"Request Indexing"** button
   - If **"URL is on Google"**: Still click **"Request Indexing"** to update
   - Google will crawl the live URL (takes 1-2 minutes)

5. **Confirm Submission:**
   - You'll see "Indexing requested" confirmation
   - Move to the next URL

6. **Track Your Progress:**
   - Use the checklist below to mark completed URLs

---

## Indexing Progress Checklist

**Day 1 (Priority 1 - Core Pages):**
- [ ] Homepage (/)
- [ ] Contact (/contact)
- [ ] Why Us (/why-us)
- [ ] Solutions Landing (/solutions)
- [ ] Projects Board (/projects-board)
- [ ] Case Studies Landing (/case-studies)

**Day 1-2 (Priority 2 - Solution Pages):**
- [ ] Data Services (/solutions/data-services)
- [ ] Quality Assurance (/solutions/quality-assurance)
- [ ] Content Moderation (/solutions/content-moderation)
- [ ] Multilingual (/solutions/multilingual)
- [ ] Enterprise BPO (/solutions/enterprise-bpo)
- [ ] Research & Insights (/solutions/research-insights)

**Day 2-3 (Priority 3 - Case Studies):**
- [ ] Healthcare AI (/case-studies/healthcare-diagnostic-accuracy)
- [ ] Autonomous Vehicles (/case-studies/autonomous-edge-cases)
- [ ] Global SaaS (/case-studies/global-saas-multilingual)
- [ ] Voice AI (/case-studies/voice-ai-cultural-context)
- [ ] E-commerce (/case-studies/ecommerce-ux-testing)
- [ ] Fintech (/case-studies/fintech-model-validation)

**Day 3 (Priority 4 - Legal Pages):**
- [ ] Privacy Policy (/privacy-policy)
- [ ] Terms of Service (/terms-of-service)
- [ ] Cookie Policy (/cookie-policy)

---

## Part 4: Monitor Indexing Progress

### Week 1: Initial Monitoring

1. **Check Coverage Report:**
   - Go to **"Coverage"** in left sidebar (under "Index")
   - Look for "Valid" pages increasing
   - Target: All 21 pages showing as "Valid" within 7-10 days

2. **Check Sitemap Status:**
   - Go to **"Sitemaps"**
   - Monitor "Discovered" vs "Indexed" count
   - Discovered should be 21, Indexed will increase gradually

3. **URL Inspection for Specific Pages:**
   - Re-inspect manually requested URLs after 3-5 days
   - Status should change from "Not indexed" to "Indexed"

### Week 2-4: Performance Tracking

1. **Performance Report:**
   - Go to **"Performance"** in left sidebar
   - Monitor:
     - **Total clicks**: User engagement
     - **Total impressions**: How often you appear in search
     - **Average CTR**: Click-through rate from search
     - **Average position**: Your ranking for various queries

2. **Search Queries:**
   - Under Performance → "Queries" tab
   - See what people are searching to find you
   - Target keywords appearing:
     - "AI data annotation"
     - "Quality assurance testing services"
     - "Multilingual localization"
     - "UsergyAI" (branded)

3. **Pages Report:**
   - Under Performance → "Pages" tab
   - See which pages get the most impressions/clicks
   - Optimize underperforming pages

---

## Expected Timeline

### Immediate (Day 1)
✅ Google Search Console verified  
✅ Sitemap submitted and accepted  
✅ Manual indexing requests started  

### Week 1
✅ 6-10 pages indexed  
✅ Sitemap shows "Discovered: 21"  
✅ First impressions appearing in Performance  

### Week 2-3
✅ All 21 pages indexed  
✅ Rankings appear for branded keywords ("UsergyAI")  
✅ Impressions for industry keywords start showing  

### Month 2-3
✅ Consistent organic traffic  
✅ Rankings improve for target keywords  
✅ Featured snippets potential (with FAQ schema)  
✅ Breadcrumb rich results appearing in search  

---

## Troubleshooting Common Issues

### Issue: "URL is not on Google" persists after 7 days

**Solutions:**
1. Check `robots.txt` - Ensure it's not blocking Googlebot
   - Go to: `https://usergy.ai/robots.txt`
   - Should NOT contain: `Disallow: /solutions` or similar
   
2. Verify page is publicly accessible:
   - Open an incognito window
   - Try accessing the URL
   - If it requires login, Google can't index it

3. Check for `noindex` meta tags:
   - View page source (right-click → View Page Source)
   - Search for `<meta name="robots" content="noindex">`
   - If found, this prevents indexing - remove it

### Issue: "Crawled - currently not indexed"

**Solutions:**
1. **Improve page quality:**
   - Add more unique content (aim for 300+ words)
   - Ensure page has clear value proposition
   - Add relevant internal links from other pages

2. **Increase internal linking:**
   - Link to the page from your homepage
   - Add to navigation menu
   - Reference from related pages

3. **Wait longer:**
   - Google may be prioritizing other pages
   - Can take 2-4 weeks for lower-priority pages

### Issue: "Sitemap could not be read"

**Solutions:**
1. Check XML syntax at: https://www.xml-sitemaps.com/validate-xml-sitemap.html
2. Ensure sitemap is publicly accessible (no password protection)
3. Verify correct sitemap URL: `https://usergy.ai/sitemap.xml`

### Issue: Daily indexing request limit reached

**Solutions:**
1. Spread requests over multiple days (normal for new sites)
2. Focus on high-priority pages first
3. Google will discover other pages naturally via sitemap

---

## Best Practices & Tips

### Do's ✅
- Request indexing for newly published pages immediately
- Update and re-request indexing when you make significant content changes
- Monitor Performance report weekly to track progress
- Submit new pages to sitemap and request indexing
- Use URL parameters tool to tell Google how to handle query strings

### Don'ts ❌
- Don't spam indexing requests (limit to major updates)
- Don't request indexing for duplicate content
- Don't expect instant indexing (takes 3-7 days typically)
- Don't panic if some pages take longer to index
- Don't ignore Mobile Usability and Core Web Vitals reports

---

## Additional Google Search Console Features to Explore

### 1. Mobile Usability Report
- Check for mobile-specific issues
- Fix any usability problems flagged

### 2. Core Web Vitals Report
- Monitor page speed metrics
- Identify slow-loading pages
- Target: All pages showing "Good" status

### 3. Links Report
- See external sites linking to you
- Monitor internal linking structure
- Identify high-value pages by backlinks

### 4. Security Issues
- Monitor for hacking or malware detection
- Get alerts if Google detects security problems

### 5. Manual Actions
- Check for penalties or manual actions
- (Should be empty for a new, legitimate site)

---

## Quick Reference Commands

**Access URL Inspection:**
Top search bar → Paste URL → Enter

**Request Indexing:**
URL Inspection → Request Indexing button

**Check Sitemap:**
Left Sidebar → Sitemaps

**View Performance:**
Left Sidebar → Performance

**Check Coverage:**
Left Sidebar → Coverage (under Index)

---

## Support Resources

- **Google Search Console Help:** https://support.google.com/webmasters
- **Indexing Status Guide:** https://developers.google.com/search/docs/crawling-indexing/ask-google-to-recrawl
- **Sitemap Guidelines:** https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap
- **SEO Starter Guide:** https://developers.google.com/search/docs/fundamentals/seo-starter-guide

---

## Summary Checklist

Before you finish, ensure:
- [ ] Google Search Console property verified
- [ ] Sitemap submitted successfully (shows 21 URLs discovered)
- [ ] All 21 pages manually requested for indexing (may take 2-3 days)
- [ ] Monitoring set up for Coverage and Performance reports
- [ ] Mobile Usability checked (no errors)
- [ ] Security Issues tab is clear
- [ ] Bookmark Google Search Console for weekly monitoring

---

**Last Updated:** 2025-11-16  
**Sitemap Location:** https://usergy.ai/sitemap.xml  
**Total Pages to Index:** 21

Good luck! Track your progress over the next 2-3 weeks and you should see significant improvements in search visibility.
