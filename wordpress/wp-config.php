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
define('DB_HOST', 'localhost');

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
define('AUTH_KEY',         'skz*!I]>3++L$^Cs6W]4$)j%+w!*v4/qgnwg:|[i.32xF5Et?RON1tdwl]Sk,Lcc');
define('SECURE_AUTH_KEY',  '_#cM5SRC9.MjgXegqF%buSj)]b*S5E])IpmS-uciS5U~][[4?2/jfX6ALW5Xr3KZ');
define('LOGGED_IN_KEY',    '6jeIgw1(9m-gTdW!rsq8;8r(Q)(#&puR*d4`d95Ej%3o^qWv=^*6{(z]pniz(Ub0');
define('NONCE_KEY',        'Q#dgnh;L|oCU:d5h;b9F612JI=%EhY~{we&{}A%9C8oH5,~!dF;0W`/k;s/IDS-#');
define('AUTH_SALT',        '~VQ/!cRCtg{i3pz*PU@qH5M1lCNt,Cc;cX}ZV(bT>h#J>$Z@,7}+DT5gfwp2LwyM');
define('SECURE_AUTH_SALT', '[6k!s0E%)]vN(wS{zQ&g*PShtkQ:x6-jtDFvTGeF)1^Kn]T1.~-~RflHl++U|y1R');
define('LOGGED_IN_SALT',   ':L$vZmZD=in:6Tf|s|@1shvz+kWd! HQBs</x:oXJ35{2l.rEN=-6lVX.c/OGHmX');
define('NONCE_SALT',       '7&J+c`w>3TimO=V>Po0lt~gbOLHH$R$Y<I%vy{uBO T7yOB<h(4WT1:s+lIZFMgP');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each a unique
 * prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'wp_';

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
