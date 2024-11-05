# Vestiges of Tomorrow

A tech and magic modpack for 1.20.1

Currently heavily WIP

### TODO
- [ ] Include and setup some kind of stages mod perhaps.
- [ ] Setup Farmer's Delight and Create as Step 0
- [ ] Setup Theurgy and Wizards Reborn as step 1.
- [ ] Setup Embers and Immersive Engineering as step 2.
- [ ] Introduce Create Metallurgy as well as more of Create
- > Possibly replace Create Metallurgy with Embers Press?
- [ ] Mekanism and AE2
- [ ] Figure out a way to generate EU from Wissen.
- [ ] Stage lock Botania.
- ??????????

### Installation Instructions

Grab the latest Build Zip artifact from the Actions tab and import it into prism launcher.

#### To add neoforge-only mods:
in pack.toml replace
```toml
[versions]
forge = "47.3.11"
minecraft = "1.20.1"
```
with
```toml
[versions]
neoforge = "47.1.106"
minecraft = "1.20.1"
```
or for fabric-only mods:
```toml
[versions]
fabric = "0.92.2"
minecraft = "1.20.1"
```
then revert this change