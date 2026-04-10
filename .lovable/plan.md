

## Plan: Add County-Level Service Area Pages

### What We're Building
Two new county-level landing pages (`/somerset-county-nj` and `/middlesex-county-nj`) that showcase all services across a county geography, plus nav updates.

### Files to Create/Modify

**1. Create `src/pages/CountyLandingPage.tsx`**
A reusable component accepting a `county` prop (`"somerset"` | `"middlesex"`). Structure:
- **Meta tags** via `useEffect` (title + description per county)
- **Hero** — "Home Remodeling Contractor in [County] County, NJ" with gold/outline CTA buttons
- **Proof stack** — stars, license, badge row (same as TownLandingPage)
- **Services section** — 3 cards (Bathroom, Kitchen, Basement) with price starting points and links to service pages
- **Towns We Serve** — grid of town names within that county (Somerset: Bridgewater, Hillsborough, Warren, Somerville, Basking Ridge, Bernardsville, Watchung, Green Brook, Bound Brook, Raritan; Middlesex: Edison, New Brunswick, Piscataway, Woodbridge, South Brunswick, East Brunswick, Old Bridge, Sayreville, Perth Amboy, Monroe)
- **Trust signals** — reuse `TrustBadges` component
- **Process steps** — reuse same 5-step process
- **CTA section** — "Get Pricing" modal + "Book Fit Call" button
- Uses existing `Header`, `Footer`, `PricingFormModal`, `ProcessStep`

**2. Modify `src/App.tsx`**
- Import `CountyLandingPage`
- Add routes: `/somerset-county-nj` and `/middlesex-county-nj`

**3. Modify `src/components/Header.tsx`**
- Add "Somerset County, NJ" and "Middlesex County, NJ" entries to the `towns` array (Service Areas dropdown), linking to the new routes

### Technical Details
- County data (towns list, meta info) stored as a config object inside CountyLandingPage, keyed by county slug
- Same design patterns, components, and styling as TownLandingPage
- Phone number updated to (732) 347-8594 as specified in meta descriptions

