<?php
/**
 * The base configurations of the WordPress.
 *
 * This file has the following configurations: MySQL settings, Table Prefix,
 * Secret Keys, WordPress Language, and ABSPATH. You can find more information
 * by visiting {@link http://codex.wordpress.org/Editing_wp-config.php Editing
 * wp-config.php} Codex page. You can get the MySQL settings from your web host.
 *
 * This file is used by the wp-config.php creation script during the
 * installation. You don't have to use the web site, you can just copy this file
 * to "wp-config.php" and fill in the values.
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'wordpress1');

/** MySQL database username */
define('DB_USER', 'root');

/** MySQL database password */
define('DB_PASSWORD', '123456');

/** MySQL hostname */
define('DB_HOST', '127.0.0.1');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'chFz9m}g}$r}QY#c=,TyW9W8Hb,/P0UG49#{XN{21CMB}LZt$#Z0S.):SrVF^V9%');
define('SECURE_AUTH_KEY',  'uyUaW#X*XPE`nB;@Yrl|3Qs-7a#5bM!zypf|wA%LIwqQrG}VgLIN71ZMy}Vu1Xp=');
define('LOGGED_IN_KEY',    'LIkLb9lw}9t-;H]$|DgDW[rXyz$<vbn&es0_uUylSlD|IVEW&wq<IDDnNq~J=vMd');
define('NONCE_KEY',        '(P8E!#4]:Kv8nBV8Rf]y3zvE?D4W!P5o7UO!3CW#vLhlc4t5zIi.j`96pzW}mPij');
define('AUTH_SALT',        'RQ BUa T;(jfSOb5ddTDg.I+~%dJ@Vb:I_pn-5^r;g!)LY6s%QVf`2,QanqrG{c`');
define('SECURE_AUTH_SALT', ',T~gq:{lY|%zS=wUC5Y oN<2w<0U#s3X/V__RA|g Hi1Abhu3o8R2k2=GZ,>mZo@');
define('LOGGED_IN_SALT',   '7jk_k#]Xk:Yz%XA$>0XQXxsc6Q?3K;#GX+2HAR9pnf)CI:|*:74]04-/#/qY7}(Y');
define('NONCE_SALT',       '=w(Y`tyWh*Yf$s$^Hf?N2)[]diUoc]@w$;kc=<AVo?J]hD5f9tlh<2Uf)~>teyw{');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each a unique
 * prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'wp6_';

/**
 * WordPress Localized Language, defaults to English.
 *
 * Change this to localize WordPress. A corresponding MO file for the chosen
 * language must be installed to wp-content/languages. For example, install
 * de_DE.mo to wp-content/languages and set WPLANG to 'de_DE' to enable German
 * language support.
 */
define('WPLANG', '');

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
