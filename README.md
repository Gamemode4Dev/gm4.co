# gm4.co
Website controls for gm4.co

The MIT License (MIT) applies to all code (non-image) files on this repo. Images shared on this repo are owned by the creator of the image and may not be reused without permission of the copyright owner.

This repo acts as a back-end for the gm4 website. It serves two purposes:

1) Controlling and modifying the content of parts of the website such as the categories on the modules page. These are hosted in the "site" directory.

2) Allowing "partners" of GM4 to link their modules to the website. These are hosted in the "partners" directory.


## Development setup
You need PHP installed to test this site locally. Then you can proceed like so:
```bash
cd site
php -S localhost:8000
```


## Notes on site contribution
Due to some files containing sensitive database related information, the entire website will not be hosted on the git. Instead, this repo is mostly designed to let everyone contribute images and content for the front-facing side of the site and for partners to control the content that appears on the site.

AS A SIDE EFFECT the contents of the git is MERGED with the website and DELETED repo files will not be deleted on the website. If a file needs to be completely deleted from the site, ask Sparks or SpiderRobotMan to do this. Replacing the file with a blank one will "delete" the file by overwriting it though.
