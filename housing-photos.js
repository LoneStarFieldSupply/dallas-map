/* Housing card photos.
   Daily additions: add or edit one key, "layer|exact card name".
   Layers: budget, APT, TH, L2, grapevine, THG.
   src      Public image URL from that property's own site. Omit when none is safely usable.
   alt      Required when src is set.
   kind     community | model | exterior | unit
   caption  Shown under the photo. Say when it is not the exact unit.
   gallery  Page the photo or source link opens. Falls back to the card's existing link.
   linkType gallery (verified photo gallery only) | website | listing | search
            Label defaults: Full gallery, Property website, Source listing,
            or "Neighborhood rental search — not this property's gallery".
   credit   Property or site credited for the photo.
   note     Source limit or why a card has a link instead of a photo.
   checked  Date the photo or link was last checked (YYYY-MM-DD).
   Do not paste stock, generated, neighboring, or MLS images.
*/
window.HOUSING_PHOTOS={
  "L2|Maple District Lofts": {
    "src": "https://mapledistrictdallas.com/assets/images/cache/rotator_3_maple_district_2459-4b9beb387618f36334dd653c4f767256.jpg",
    "alt": "Maple District Lofts community pool and apartment buildings",
    "kind": "community",
    "caption": "Community photo, not a specific unit",
    "gallery": "https://mapledistrictdallas.com/",
    "credit": "Maple District Lofts",
    "checked": "2026-11-07",
    "linkType": "website"
  },
  "L2|The Griffin": {
    "src": "https://lh3.googleusercontent.com/AHnc-xiJ3KdzdMjcmwZvTjlmI7jzWNFLXVrb-jhlRXDRGvbOpPAJbahoUoHQD-XDv22pRFUZixsyDLk3hB8DDhatB5oBxZfl35mP3Q=w900",
    "alt": "The Griffin courtyard pool and brick loft buildings",
    "kind": "community",
    "caption": "Community photo, not a specific unit",
    "gallery": "https://www.thegriffindallas.com/",
    "credit": "The Griffin",
    "checked": "2026-11-07",
    "linkType": "website"
  },
  "L2|Link at Plano": {
    "src": "https://linkatplano.com/assets/images/cache/ZgAhY9JxU1IANHama2bkiXGhd0XTqVC8lhedJ69v-c880fb1ff166873f62c2ce9cd44d661f.jpg",
    "alt": "Link at Plano model kitchen with herringbone-style flooring",
    "kind": "model",
    "caption": "Model photo, not a specific available unit",
    "gallery": "https://linkatplano.com/gallery/",
    "credit": "Link at Plano",
    "checked": "2026-11-07",
    "linkType": "gallery"
  },
  "L2|Flatiron District at Austin Ranch": {
    "src": "https://g5-assets-cld-res.cloudinary.com/image/upload/q_auto,f_auto,c_fill,g_center,h_420,w_740/v1740690816/g5/g5-c-inrtkls3-lincoln-property-company/g5-cl-1om0s6v4ea-lincoln-property-company-lpc-resident-services-the-colony-tx/uploads/shoootin-photo-8_fkd5aq.jpg",
    "alt": "Flatiron District at Austin Ranch model kitchen and living area",
    "kind": "model",
    "caption": "Model photo, not a specific available unit",
    "gallery": "https://www.flatirondistrictataustinranch.com/apartments/tx/the-colony/photo-gallery",
    "credit": "Flatiron District at Austin Ranch",
    "checked": "2026-11-07",
    "linkType": "gallery"
  },
  "L2|2403 N Washington #337": {
    "src": "https://broadstoneparagon.com/assets/images/cache/broadstone-exterior1-d14c2bcd9ce6f653a0626b4769afe579.jpg",
    "alt": "Broadstone Paragon exterior sign and building at 2403 N Washington",
    "kind": "exterior",
    "caption": "Community exterior of Broadstone Paragon. Not unit 337",
    "gallery": "https://broadstoneparagon.com/gallery/",
    "credit": "Broadstone Paragon",
    "checked": "2026-11-07",
    "linkType": "gallery",
    "note": "broadstoneparagon.com lists 2403 N. Washington Ave and townhomes with attached garages. This photo is the community exterior, not unit 337."
  },
  "L2|4539 Cedar Springs": {
    "gallery": "https://www.rentable.co/dallas-tx/4539-cedar-springs-rd",
    "note": "No safely reusable photo. The mapped source is an aggregator listing, not an official gallery.",
    "checked": "2026-11-07",
    "linkType": "listing"
  },
  "L2|Legacy North": {
    "src": "https://images.myrazz.com/uc-image/cc6223ef-8b05-4a99-b5ed-d55234935b59/-/format/webp/-/quality/lighter/-/resize/x800/-/scale_crop/640x400/center/legacy_north_-_aurora_-_kitchen.webp",
    "alt": "Model kitchen at Legacy North in Plano",
    "kind": "model",
    "caption": "Model photo, not a specific available unit",
    "gallery": "https://www.legacynorthapts.com/",
    "credit": "Legacy North",
    "checked": "2026-11-07",
    "linkType": "website"
  },
  "L2|MAA Legacy": {
    "src": "https://edge.sitecorecloud.io/midamericaa7861-test603e-prod9e24-2f78/media/project/maac/maac_com/texas/dallas/properties/maa-legacy/property-hero/245700---maa-legacy---kitchen-1-main.jpg?h=600&iar=0&w=960&q=70",
    "alt": "Model kitchen at MAA Legacy",
    "kind": "model",
    "caption": "Model photo, not a specific available unit",
    "gallery": "https://www.maac.com/texas/dallas/maa-legacy/",
    "credit": "MAA Legacy",
    "checked": "2026-11-07",
    "linkType": "website"
  },
  "L2|Windsor Metro West (borderline)": {
    "src": "https://cdn.rentcafe.com/dmslivecafe/2/70135/2ModelHomes_P1_MetroWest.jpg",
    "alt": "Model kitchen at Windsor Metro West",
    "kind": "model",
    "caption": "Model photo, not a specific available unit",
    "gallery": "https://www.windsorcommunities.com/properties/windsor-metro-west/",
    "credit": "Windsor Metro West",
    "checked": "2026-11-07",
    "linkType": "website"
  },
  "L2|Cortland One Twenty One": {
    "src": "https://d1lmwj1mqgoj6.cloudfront.net/misc/55039136dccb99ee.jpg",
    "alt": "Model kitchen at Cortland One Twenty One",
    "kind": "model",
    "caption": "Model photo, not a specific available unit",
    "gallery": "https://apartments.cortland.com/cortland-one-twenty-one",
    "credit": "Cortland One Twenty One",
    "checked": "2026-11-07",
    "linkType": "website"
  },
  "L2|Cityplace Heights": {
    "src": "https://media.multihub.io/cdn-cgi/image/format=auto,w=640/property/5638549609119744/01a16c50-69e0-740c-a3f3-4606922b7368.webp",
    "alt": "Model kitchen at Cityplace Heights",
    "kind": "model",
    "caption": "Model photo, not a specific available unit",
    "gallery": "https://www.cityplaceheights.com/gallery/",
    "credit": "Cityplace Heights",
    "checked": "2026-11-07",
    "linkType": "gallery"
  },
  "budget|Cityplace Heights": {
    "src": "https://media.multihub.io/cdn-cgi/image/format=auto,w=640/property/5638549609119744/01a16c50-69e0-740c-a3f3-4606922b7368.webp",
    "alt": "Model kitchen at Cityplace Heights",
    "kind": "model",
    "caption": "Model photo, not a specific available unit",
    "gallery": "https://www.cityplaceheights.com/gallery/",
    "credit": "Cityplace Heights",
    "checked": "2026-11-07",
    "linkType": "gallery"
  },
  "L2|Macallan on Ross": {
    "src": "https://media.multihub.io/cdn-cgi/image/format=auto,w=640/property/5646289643503616/019e89a1-0eb3-70d7-8869-4f6a59c36e2a.webp",
    "alt": "Model kitchen at Macallan on Ross",
    "kind": "model",
    "caption": "Model photo, not a specific available unit",
    "gallery": "https://www.macallanonross.com/",
    "credit": "Macallan on Ross",
    "checked": "2026-11-07",
    "linkType": "website"
  },
  "L2|ICON at Ross": {
    "src": "https://www.simpsonpropertygroup.com/Uploads2/CommunitySliderImagesV2_resized/ICON_ModelKitchen_01_HIGH_2025.jpg",
    "alt": "Model kitchen at ICON at Ross",
    "kind": "model",
    "caption": "Model photo, not a specific available unit",
    "gallery": "https://www.simpsonpropertygroup.com/apartments/dallas-texas/icon-at-ross-dallas/",
    "credit": "ICON at Ross",
    "checked": "2026-11-07",
    "linkType": "website"
  },
  "L2|Manchester State Thomas": {
    "src": "https://manchesterstatethomas.com/assets/images/cache/rotator_1_manchester_state_1737-35c99a7fd52529cf00ea7c7b16dbe5ce.jpg",
    "alt": "Staged living room published by Manchester State Thomas",
    "kind": "model",
    "caption": "Staged marketing interior, not a specific available unit",
    "gallery": "https://manchesterstatethomas.com/",
    "credit": "Manchester State Thomas",
    "checked": "2026-11-07",
    "linkType": "website"
  },
  "L2|Magnolia Station Lofts II": {
    "src": "https://magnoliastationdallas.com/wp-content/uploads/sites/3/2022/06/MagnoliaStation_Modern-Spirit-6_900x600.jpg",
    "alt": "Model living room and kitchen at Magnolia Station, 1607 Lyte Street",
    "kind": "model",
    "caption": "Model photo, not a specific available unit",
    "gallery": "https://magnoliastationdallas.com/",
    "credit": "Magnolia Station",
    "checked": "2026-11-07",
    "linkType": "website"
  },
  "L2|Boat House (lakefront)": {
    "gallery": "https://www.boathouseapts.com/",
    "note": "Official site is linked. Its public gallery did not expose a verifiable property photo.",
    "checked": "2026-11-07",
    "linkType": "website"
  },
  "L2|Arcadian in Victory Park": {
    "gallery": "https://www.thearcadianapartments.com/the-arcadian-dallas-tx",
    "note": "Official site is linked. No verifiable property photo was available without a blocked page.",
    "checked": "2026-11-07",
    "linkType": "website"
  },
  "APT|Park West": {
    "src": "https://parkwestoaklawn.com/assets/images/cache/E13SHhgg1j8BqY8uDB6cbpWiel3BwtYgv8LNhZCh-54ec8c3789f550ad3d1b26fc5c61db56.jpg",
    "alt": "Model kitchen at Park West on Douglas Avenue",
    "kind": "model",
    "caption": "Model photo, not a specific available unit",
    "gallery": "https://parkwestoaklawn.com/gallery/",
    "credit": "Park West",
    "checked": "2026-11-07",
    "linkType": "gallery"
  },
  "APT|Whitney Uptown": {
    "src": "https://whitneyuptown.com/assets/images/cache/whitney-uptown-007--d2a46ead05082fd23274d599b39e2b2f.jpg",
    "alt": "Whitney Uptown community lounge with city views",
    "kind": "community",
    "caption": "Community photo, not a specific unit",
    "gallery": "https://whitneyuptown.com/",
    "credit": "Whitney Uptown",
    "checked": "2026-11-07",
    "linkType": "website"
  },
  "APT|Skyline Trinity": {
    "src": "https://apollostore.blob.core.windows.net/skylinetrinity/uploads/assets/skyline-int1.9deb9727.jpg",
    "alt": "Model living room at Skyline Trinity",
    "kind": "model",
    "caption": "Model photo, not a specific available unit",
    "gallery": "https://www.skylinetrinity.com/",
    "credit": "Skyline Trinity",
    "checked": "2026-11-07",
    "linkType": "website"
  },
  "APT|4123 Cedar Springs": {
    "gallery": "https://www.4123cedarspringsaptsdallas.com/",
    "note": "Official site blocked automated access. No photo is embedded.",
    "checked": "2026-11-07",
    "linkType": "website"
  },
  "APT|Fairmount at Oak Lawn": {
    "gallery": "https://www.fairmountoaklawn.com/",
    "note": "Official site blocked automated access. No photo is embedded.",
    "checked": "2026-11-07",
    "linkType": "website"
  },
  "budget|MAA Addison Circle": {
    "src": "https://edge.sitecorecloud.io/midamericaa7861-test603e-prod9e24-2f78/media/project/maac/maac_com/texas/dallas/properties/maa-addison-circle/property-hero/243401---maa-addison-circle---kitchen-2-main.jpg?h=600&iar=0&w=960&q=70",
    "alt": "Model kitchen at MAA Addison Circle",
    "kind": "model",
    "caption": "Model photo, not a specific available unit",
    "gallery": "https://www.maac.com/texas/dallas/maa-addison-circle/",
    "credit": "MAA Addison Circle",
    "checked": "2026-11-07",
    "linkType": "website"
  },
  "budget|Savoye": {
    "src": "https://www.udr.com/globalassets/communities/savoye/images/savoye_2025_pl1-08_w360.jpg",
    "alt": "Savoye community pool and apartment buildings at Vitruvian Park",
    "kind": "community",
    "caption": "Community photo, not a specific unit",
    "gallery": "https://www.udr.com/dallas-apartments/addison/savoye/",
    "credit": "Savoye",
    "checked": "2026-11-07",
    "linkType": "website"
  },
  "budget|Rise Highland Park (Dallas, HP edge)": {
    "src": "https://uymzdc367ch5de5a.public.blob.vercel-storage.com/propco/media/rise-highland-park/5b46b325ab32d8ead602bc35229f480a16cdeb3685ea8ed4964234de82767704-640.webp",
    "alt": "Rise Highland Park community lobby",
    "kind": "community",
    "caption": "Community photo, not a specific unit",
    "gallery": "https://rise48communities.com/tx/dallas/rise-highland-park",
    "credit": "Rise Highland Park",
    "checked": "2026-11-07",
    "linkType": "website"
  },
  "budget|Brooklyn @ 9590": {
    "src": "https://thebrooklynat9590.com/wp-content/uploads/2021/08/home-gallery.jpg",
    "alt": "Model living room at The Brooklyn at 9590",
    "kind": "model",
    "caption": "Model photo, not a specific available unit",
    "gallery": "https://thebrooklynat9590.com/",
    "credit": "The Brooklyn at 9590",
    "checked": "2026-11-07",
    "linkType": "website"
  },
  "budget|Strata": {
    "gallery": "https://www.simpsonpropertygroup.com/apartments/dallas-texas/strata-dallas",
    "note": "Official page blocked automated access. No photo is embedded.",
    "checked": "2026-11-07",
    "linkType": "website"
  },
  "budget|The Atlantic at Kessler Park": {
    "gallery": "https://www.atlanticatkesslerpark.com/",
    "note": "A property pool photo exists on the official site only as a large original. It is not embedded, to avoid a heavy unverified-size file and nearby stock images on the same host.",
    "checked": "2026-11-07",
    "linkType": "website"
  },
  "budget|Oakwood Creek": {
    "gallery": "https://www.theoakwoodcreek.com/",
    "note": "Official site blocked automated access. No photo is embedded.",
    "checked": "2026-11-07",
    "linkType": "website"
  },
  "budget|Wyndham on the Creek": {
    "gallery": "https://www.wyndhamonthecreek.com/",
    "note": "Official site blocked automated access. No photo is embedded.",
    "checked": "2026-11-07",
    "linkType": "website"
  },
  "grapevine|Montelena Apartments": {
    "src": "https://www.simpsonpropertygroup.com/Uploads2/CommunitySliderImagesV2_resized/Montelena_ModelKitchen_02_HIGH.jpg",
    "alt": "Model kitchen at Montelena Apartments in Grapevine",
    "kind": "model",
    "caption": "Model photo, not a specific available unit",
    "gallery": "https://www.simpsonpropertygroup.com/apartments/grapevine-texas/montelena-grapevine",
    "credit": "Montelena Apartments",
    "checked": "2026-11-07",
    "linkType": "website"
  },
  "grapevine|Grapevine Station Apartments & Cottages": {
    "src": "https://res.cloudinary.com/g5-assets-cld/image/upload/x_0,y_371,h_1600,w_4000,c_crop/q_auto,f_auto,fl_lossy,g_center,h_420,w_740/g5/g5-c-666xnt0yj-sunridge-management-group/g5-cl-1pq4vvxq7i-sunridge-management-group-grapevine-tx/uploads/grapevinestation01_lglwb2.jpg",
    "alt": "Grapevine Station apartment buildings exterior",
    "kind": "exterior",
    "caption": "Community exterior, not a specific unit",
    "gallery": "https://www.grapevinestationapts.com/",
    "credit": "Grapevine Station",
    "checked": "2026-11-07",
    "linkType": "website"
  },
  "grapevine|Resort at 925 Main — 1BR lofts only": {
    "src": "https://res.cloudinary.com/g5-assets-cld/image/upload/q_auto,f_auto,fl_lossy,c_fill,g_center,h_480,w_800/g5/g5-c-5bspw9vu7-westcorp-management-client/g5-cl-1p4bmby5lp-westcorp-management-client-grapevine-tx/uploads/925_Model_3_cimuve_rxbbtx.jpg",
    "alt": "Model bedroom at Resort at 925 Main",
    "kind": "model",
    "caption": "Model photo, not a specific loft unit",
    "gallery": "https://www.925mainstreet.com/",
    "credit": "Resort at 925 Main",
    "checked": "2026-11-07",
    "linkType": "website"
  },
  "TH|5909 Birchbrook Dr #223": {
    "gallery": "https://www.har.com/homedetail/5909-birchbrook-dr-223-dallas-tx-75206/10510026",
    "linkType": "listing",
    "note": "HAR listing for unit 223. MLS photos are not republished.",
    "checked": "2026-11-07"
  },
  "TH|6202 Goliad Ave": {
    "gallery": "https://www.texasally.com/homes-for-sale-details/6202-GOLIAD-AVENUE-DALLAS-TX-75214/21125686/51/",
    "linkType": "listing",
    "note": "Listing page for this address. Photos stay on the source page and are not republished.",
    "checked": "2026-11-07"
  },
  "TH|111 S Henderson Ave": {
    "note": "No verified unit listing page was confirmed, so this stays a neighborhood search. No photo is embedded.",
    "checked": "2026-11-07",
    "linkType": "search"
  },
  "TH|605 W Page Ave": {
    "note": "No verified unit listing page was confirmed, so this stays a neighborhood search. No photo is embedded.",
    "checked": "2026-11-07",
    "linkType": "search"
  },
  "THG|1910 Wilshire Dr": {
    "note": "HAR listing is linked. MLS photos are not republished.",
    "checked": "2026-11-07"
  },
  "THG|4236 Cuesta Dr": {
    "note": "HAR listing is linked. MLS photos are not republished.",
    "checked": "2026-11-07"
  },
  "THG|2625 Encina Dr #4": {
    "note": "HAR listing is linked. MLS photos are not republished.",
    "checked": "2026-11-07"
  },
  "THG|408 Santa Fe Trl #61": {
    "note": "HAR listing is linked. MLS photos are not republished.",
    "checked": "2026-11-07"
  },
  "THG|4777 Cedar Springs Rd 4D": {
    "note": "HAR listing is linked. MLS photos are not republished.",
    "checked": "2026-11-07"
  },
  "THG|3102 Kings Rd #3201": {
    "note": "HAR listing is linked. MLS photos are not republished.",
    "checked": "2026-11-07"
  },
  "THG|2700 Old Denton Rd #1054": {
    "note": "HAR listing is linked. MLS photos are not republished.",
    "checked": "2026-11-07"
  },
  "THG|2700 Old Denton Rd #2257": {
    "note": "HAR listing is linked. MLS photos are not republished.",
    "checked": "2026-11-07"
  },
  "THG|5630 Spring Valley Rd 17d": {
    "note": "HAR listing is linked. MLS photos are not republished.",
    "checked": "2026-11-07"
  },
  "THG|5100 Verde Valley Ln #277": {
    "note": "HAR listing is linked. MLS photos are not republished.",
    "checked": "2026-11-07"
  },
  "THG|5616 Preston Oaks Rd #1506": {
    "note": "HAR listing is linked. MLS photos are not republished.",
    "checked": "2026-11-07"
  },
  "THG|5325 Bent Tree Forest Dr #2232": {
    "note": "HAR listing is linked. MLS photos are not republished.",
    "checked": "2026-11-07"
  },
  "THG|18040 Midway Rd #230": {
    "note": "HAR listing is linked. MLS photos are not republished.",
    "checked": "2026-11-07"
  },
  "THG|4242 N Capistrano Dr #150": {
    "note": "HAR listing is linked. MLS photos are not republished.",
    "checked": "2026-11-07"
  },
  "THG|7474 Fair Oaks Ave #7402": {
    "note": "HAR listing is linked. MLS photos are not republished.",
    "checked": "2026-11-07"
  },
  "THG|5710 Leona Ave #9": {
    "note": "HAR listing is linked. MLS photos are not republished.",
    "checked": "2026-11-07"
  },
  "THG|17490 Meandering Way #1005": {
    "note": "HAR listing is linked. MLS photos are not republished.",
    "checked": "2026-11-07"
  },
  "THG|4535 Woodsboro Ln": {
    "note": "HAR listing is linked. MLS photos are not republished.",
    "checked": "2026-11-07"
  },
  "THG|8745 Manhattan Ave": {
    "note": "HAR listing is linked. MLS photos are not republished.",
    "checked": "2026-11-07"
  },
  "THG|8609 Heather Ridge Dr": {
    "note": "HAR listing is linked. MLS photos are not republished.",
    "checked": "2026-11-07"
  },
  "THG|8734 Manhattan Ave": {
    "note": "HAR listing is linked. MLS photos are not republished.",
    "checked": "2026-11-07"
  },
  "budget|4321 Cole Ave": {
    "note": "No safely reusable photo from this property's own site. Open the listing.",
    "checked": "2026-11-07"
  },
  "budget|Apartments at M-Streets (1925 Moser)": {
    "note": "No safely reusable photo from this property's own site. Open the listing.",
    "checked": "2026-11-07"
  },
  "budget|Maverick Oak Lawn": {
    "note": "No safely reusable photo from this property's own site. Open the listing.",
    "checked": "2026-11-07"
  },
  "budget|The Courtyards at Lower Greenville": {
    "note": "No safely reusable photo from this property's own site. Open the listing.",
    "checked": "2026-11-07"
  },
  "budget|727 Glendale St Apt B (duplex)": {
    "note": "No safely reusable photo from this property's own site. Open the listing.",
    "checked": "2026-11-07"
  },
  "budget|5721 Victor St (duplex)": {
    "note": "No safely reusable photo from this property's own site. Open the listing.",
    "checked": "2026-11-07"
  },
  "budget|5901 Vickery Blvd (half duplex)": {
    "note": "No safely reusable photo from this property's own site. Open the listing.",
    "checked": "2026-11-07"
  },
  "budget|Vitruvian West": {
    "note": "No safely reusable photo from this property's own site. Open the listing.",
    "checked": "2026-11-07",
    "linkType": "website"
  },
  "budget|4067 Beltway Dr #122 (townhouse-style condo)": {
    "note": "No safely reusable photo from this property's own site. Open the listing.",
    "checked": "2026-11-07"
  },
  "budget|4820 Westgrove Dr (townhouse)": {
    "note": "The mapped link is a neighborhood or zip search, not this property's gallery. No photo is embedded.",
    "checked": "2026-11-07",
    "linkType": "search"
  },
  "budget|Bent Tree Fountains": {
    "note": "No safely reusable photo from this property's own site. Open the listing.",
    "checked": "2026-11-07"
  },
  "budget|4049 Herschel Ave Unit A (Dallas, HP edge)": {
    "note": "The mapped link is a neighborhood or zip search, not this property's gallery. No photo is embedded.",
    "checked": "2026-11-07",
    "linkType": "search"
  },
  "budget|3431 Granada Ave #A (cheapest UP found; over budget)": {
    "note": "No safely reusable photo from this property's own site. Open the listing.",
    "checked": "2026-11-07"
  },
  "budget|City North": {
    "note": "The mapped link is a neighborhood or zip search, not this property's gallery. No photo is embedded.",
    "checked": "2026-11-07",
    "linkType": "search"
  },
  "budget|Infinity on the Oaks": {
    "note": "The mapped link is a neighborhood or zip search, not this property's gallery. No photo is embedded.",
    "checked": "2026-11-07",
    "linkType": "search"
  },
  "grapevine|1103 Airline Dr #4": {
    "note": "No safely reusable photo from this property's own site. Open the listing.",
    "checked": "2026-11-07"
  },
  "grapevine|714 E Wall St #111": {
    "note": "No safely reusable photo from this property's own site. Open the listing.",
    "checked": "2026-11-07"
  },
  "grapevine|713 Cory St (duplex)": {
    "note": "No safely reusable photo from this property's own site. Open the listing.",
    "checked": "2026-11-07"
  },
  "L2|Park View on Cole": {
    "note": "No safely reusable verified photo. Open the source listing.",
    "checked": "2026-11-07"
  },
  "L2|Delante Apartments": {
    "gallery": "https://www.delanteapartments.com/photogallery",
    "linkType": "gallery",
    "credit": "Delante Apartments",
    "note": "Official photo gallery (28 photos). Individual image files were not available to review, so none is embedded.",
    "checked": "2026-11-07"
  },
  "L2|Cortland at Valley Ranch": {
    "src": "https://cortland.com/assets/images/Stoneleigh-at-Valley-Ranch_model-kitchen-3.jpg",
    "alt": "Model kitchen at Cortland at Valley Ranch with white cabinets, granite, and stainless appliances, not a specific unit",
    "kind": "model",
    "caption": "Model kitchen, not unit #3027. Renovated finishes; popcorn ceiling remains.",
    "gallery": "https://cortland.com/apartments/cortland-at-valley-ranch/gallery/",
    "linkType": "gallery",
    "credit": "Cortland at Valley Ranch",
    "checked": "2026-11-07"
  },
  "L2|The Oaks at Valley Ranch": {
    "src": "https://medialibrarycfo.entrata.com/17651/MLv3/3/21/2022/05/17/035754/62841a62404de8.89684155200.jpg",
    "alt": "Clubhouse lounge at The Oaks at Valley Ranch, not an apartment or townhome interior",
    "kind": "community",
    "caption": "Community clubhouse, not a B3 or B4 interior",
    "gallery": "https://www.oaksatvalleyranch.com/irving/the-oaks-at-valley-ranch/amenities/",
    "linkType": "website",
    "credit": "The Oaks at Valley Ranch",
    "checked": "2026-11-07"
  },
  "L2|Heritage at Valley Ranch": {
    "src": "https://resource.rentcafe.com/image/upload/q_auto,f_auto,w_1200/s3/2/11269/heritage-at-valley-ranch_irving-tx_apartment-12.jpg",
    "alt": "Model living room with a vaulted ceiling at Heritage at Valley Ranch, not a specific unit",
    "kind": "model",
    "caption": "Model living room, not unit #0304",
    "gallery": "https://www.heritageatvalleyranchapts.com/",
    "linkType": "website",
    "credit": "Heritage at Valley Ranch",
    "checked": "2026-11-07"
  },
  "L2|Eastlake Residences": {
    "src": "https://eastlakeresidences.com/wp-content/uploads/2026/08/00ef45be3360a1360b18f285d1c4968a18f8cf23.jpg",
    "alt": "Eastlake Residences model kitchen and living area with a white quartz island",
    "kind": "model",
    "caption": "Model/community interior, not a specific unit. Official gallery photo shows white quartz; the color name is not published.",
    "gallery": "https://eastlakeresidences.com/gallery/",
    "linkType": "gallery",
    "credit": "Eastlake Residences",
    "checked": "2026-11-13"
  },
  "L2|Magnolia at Lakewood": {
    "src": "https://www.liveatmagnolia.com/wp-content/uploads/2026/05/2-web-or-mls-Untitled-Album-75-of-105.jpg",
    "alt": "Magnolia at Lakewood model kitchen with speckled gray granite counters",
    "kind": "model",
    "caption": "Model/community kitchen, not a specific unit. Official photo shows speckled gray granite, not solid white.",
    "gallery": "https://www.liveatmagnolia.com/homes/tx/dallas/magnolia-at-lakewood/",
    "linkType": "website",
    "credit": "Magnolia at Lakewood",
    "checked": "2026-11-13"
  },
  "L2|Magnolia Galleria": {
    "src": "https://www.liveatmagnolia.com/wp-content/uploads/2026/06/magnolia-galleria-showcase-02.jpg",
    "alt": "Magnolia Galleria model kitchen with speckled light granite counters",
    "kind": "model",
    "caption": "Model/community kitchen, not a specific unit. Official photo shows speckled light granite, not solid white.",
    "gallery": "https://www.liveatmagnolia.com/homes/tx/dallas/magnolia-galleria/",
    "linkType": "website",
    "credit": "Magnolia Galleria",
    "checked": "2026-11-13"
  },
  "L2|Reserve at White Rock": {
    "gallery": "https://www.reserveatwhiterock.com/photogallery",
    "note": "No safely reusable official photo was verified this pass. The mapped source is the official photo gallery.",
    "checked": "2026-11-13",
    "linkType": "gallery"
  },
  "L2|Elysian Heights": {
    "gallery": "https://www.elysianheightsapts.com/photogallery",
    "note": "No safely reusable official photo was verified this pass. The mapped source is the official photo gallery (32 photos).",
    "checked": "2026-11-13",
    "linkType": "gallery"
  },
  "L2|Gatsby on Ross": {
    "gallery": "https://www.gatsbyonross.com/photogallery",
    "note": "No safely reusable official photo URL was verified this pass. The mapped source is the official photo gallery (25 photos).",
    "checked": "2026-11-13",
    "linkType": "gallery"
  },
  "L2|The Academic": {
    "src": "https://theacademicdallas.com/wp-content/uploads/2022/09/The-Academic-39_1024x594.jpg",
    "alt": "The Academic model kitchen with speckled gray granite counters",
    "kind": "model",
    "caption": "Model/community kitchen, not a specific unit. Official photo shows speckled gray granite, not solid white.",
    "gallery": "https://theacademicdallas.com/",
    "linkType": "website",
    "credit": "The Academic",
    "checked": "2026-11-13"
  },
  "L2|4600 Ross": {
    "gallery": "https://www.4600ross.com/photogallery",
    "note": "No safely reusable official photo URL was verified this pass. The mapped source is the official photo gallery.",
    "checked": "2026-11-13",
    "linkType": "gallery"
  },
  "L2|Camden Belmont": {
    "gallery": "https://www.camdenliving.com/apartments/dallas-tx/camden-belmont",
    "note": "No safely reusable official photo URL was verified this pass. The mapped source is the official community website.",
    "checked": "2026-11-13",
    "linkType": "website"
  },
  "L2|The Sevens": {
      "gallery": "https://www.sevensapts.com/tx/dallas/photogallery",
      "note": "No safely reusable official photo URL was verified this pass. The mapped source is the official photo gallery.",
      "checked": "2026-11-13",
      "linkType": "gallery"
    },
  "L2|The Mark at Midtown": {
      "gallery": "https://www.themarkdallas.com/photogallery",
      "note": "No safely reusable official photo URL was verified this pass. The mapped source is the official photo gallery.",
      "checked": "2026-11-13",
      "linkType": "gallery"
    },
  "L2|The Nash": {
    "gallery": "https://www.thenashapt.com/",
    "note": "No safely reusable official photo URL was verified this pass. The mapped source is the official community website.",
    "checked": "2026-11-13",
    "linkType": "website"
  }
,
  "L2|Luxia Midtown Park": {
    "gallery": "https://www.luxiamidtownpark.com/",
    "note": "No safely reusable official photo URL was verified this pass. The mapped source is the official community website.",
    "checked": "2026-11-13",
    "linkType": "website"
  },
  "L2|MAA Cathedral Arts": {
    "gallery": "https://www.maac.com/texas/dallas/maa-cathedral-arts/",
    "note": "No safely reusable official photo URL was verified this pass. The mapped source is the official community website.",
    "checked": "2026-11-13",
    "linkType": "website"
  }
,
  "L2|Haven Lake Highlands": {
    "gallery": "https://www.havenlakehighlands.com/",
    "note": "No safely reusable official photo URL was verified this pass. The mapped source is the official community website.",
    "checked": "2026-11-13",
    "linkType": "website"
  },
  "L2|75 West": {
    "gallery": "https://www.live75west.com/",
    "note": "No safely reusable official photo URL was verified this pass. The mapped source is the official community website.",
    "checked": "2026-11-13",
    "linkType": "website"
  }
,
  "L2|Belclaire": {
    "gallery": "https://www.belclaireluxuryliving.com/",
    "note": "No safely reusable official photo URL was verified this pass. The mapped source is the official community website.",
    "checked": "2026-11-13",
    "linkType": "website"
  }
,
  "L2|Shoreview Flats": {
    "gallery": "https://shoreviewdallas.com/",
    "note": "No safely reusable official photo URL was verified this pass. The mapped source is the official community website.",
    "checked": "2026-11-13",
    "linkType": "website"
  },
  "L2|Modena": {
    "gallery": "https://www.modenadallas.com/",
    "note": "No safely reusable official photo URL was verified this pass. The mapped source is the official community website.",
    "checked": "2026-11-13",
    "linkType": "website"
  }
,
  "L2|Radius Turtle Creek": {
    "gallery": "https://www.radiusturtlecreek.com/dallas/radius-turtle-creek/photos/",
    "note": "No safely reusable official photo URL was verified this pass. The mapped source is the official photo gallery.",
    "checked": "2026-11-13",
    "linkType": "gallery"
  },
  "L2|The Fairmount at Oak Lawn": {
    "gallery": "https://www.fairmountoaklawn.com/",
    "note": "No safely reusable official photo URL was verified this pass. The mapped source is the official community website.",
    "checked": "2026-11-13",
    "linkType": "website"
  },
  "L2|Gables Katy Trail": {
    "gallery": "https://www.gables.com/community/528475",
    "note": "No safely reusable official photo URL was verified this pass. The mapped source is the official community website.",
    "checked": "2026-11-13",
    "linkType": "website"
  }

};
