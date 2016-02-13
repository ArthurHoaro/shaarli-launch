# Launch theme for Shaarli

Launch is a theme for [Shaarli](https://github.com/shaarli/Shaarli).

[Live demo (frontend)](https://links.hoa.ro)

Screenshot with the default menu:

![screenshot](http://i.imgur.com/axH1TYk.png)

## Installation

To download this theme, [visit this page](https://github.com/ArthurHoaro/shaarli-launch) and choose the 
most recent version matching the version of your Shaarli installation. Both use the same notation.

Versions are suffixed by `-x` to include some bugfix so take the higher number that fits your Shaarli installation.

Put the `shaarli-launch` folder into the `tpl` directory of your Shaarli installation. It should be next to existing `.html` files.

In your Shaarli installation, open the `data/config.php` and change the `RAINTPL_TPL` parameter to `tpl/shaarli-launch/`.
If you can't find this parameter, paste the following line at the end of the file:

```php
$GLOBALS['config']['RAINTPL_TPL'] = 'tpl/shaarli-launch/' ; // keep the trailing slash!
```

## Launch Plugin

It's recommended to install the [launch-plugin](https://github.com/ArthurHoaro/launch-plugin) which lets you customize your theme (menus, subtitle, etc.).

## License 

This theme is distributed under MIT License. See [Licence.md](https://github.com/ArthurHoaro/shaarli-launch/blob/master/LICENSE.md).

