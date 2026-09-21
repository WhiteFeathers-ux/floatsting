# Float & Sting

A static, installable personal training app: five lifting days, two full rest days, swimming and running. Push/pull weeks rotate from the Monday of September 21, 2026 using local calendar dates. Exercise checks are stored per week and plan version on the current device; there is no cloud sync or weight/rep log.

Live app: https://whitefeathers-ux.github.io/floatsting/

Serve this directory with a static HTTP server. GitHub Pages deploys the repository root from `main`. When publishing app assets, update the cache version and asset list in `sw.js`. An already installed old version may need to be closed and reopened after its service worker updates.

## Training basis

The specific exercise selection, rotation, conservative cardio ramp and calorie adjustments are practical programming choices, not a clinically validated protocol or a claim that one routine is universally best.

- [ACSM resistance-training position stand, 2026](https://pubmed.ncbi.nlm.nih.gov/41843416/): progressive resistance training and volume.
- [ISSN protein position stand](https://link.springer.com/article/10.1186/s12970-017-0177-8): protein intake for exercising adults.
- [Helms et al., 2023](https://pubmed.ncbi.nlm.nih.gov/37914977/): larger energy surpluses and fat gain.
- [Schumann et al., 2022](https://pubmed.ncbi.nlm.nih.gov/34757594/): concurrent aerobic and resistance training.
- [Exercise-order meta-analysis](https://pubmed.ncbi.nlm.nih.gov/28917030/): resistance-first sequencing when combining sessions.

## Assets

The F/S icon is original vector artwork in `icon.svg`, rendered to the PNG sizes required by the PWA manifest. PNG metadata records its origin. No boxing imagery or generated photography is used.
