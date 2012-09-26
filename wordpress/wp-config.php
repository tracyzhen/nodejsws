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
define('AUTH_KEY',         '8XiW~]eUo(@DJ_]_8});sk<!h{^NjDenYPw;6^+8NHI~d>e?w.)nYVN)h@=2wmEM');
define('SECURE_AUTH_KEY',  'os!AtbC&4U{9O>^+QhW{bKiK]skw}xYf#sQ(Ko(!K!Q(TJWrf+8%$#O]RR=SGPma');
define('LOGGED_IN_KEY',    '9%t|LwNd`~?G2t9Tv7I2(#Nj8v}Z{EjZ/Ci{fY7|WkGE<zGYM3O8~$L sb-Y;V&v');
define('NONCE_KEY',        '4^ gq.wYojgiy`agcaRS9--^qSZ7`YX)E_*Cs%T[8$rW9YOZJWu:gAbzHe}^uIv-');
define('AUTH_SALT',        '[?.01oYvM2Wu h-L^^J_l+4jD(!eD.D8I+CxO` b{LUJ(x>4HIyof}5HW@;Ffnll');
define('SECURE_AUTH_SALT', '(8RxTF>>RP*)B?@:h{|P/*v&VUAopOJj9K@h^.bB;w;]XW0^q^ZOAUt{bt%I_wxm');
define('LOGGED_IN_SALT',   'Lrno!5x7F2b<lTOA>dv=PN(A`-&s;VJ[~Z+09~f:><7,4oi?_OfuOQ,K^[I&C(0n');
define('NONCE_SALT',       'pPwB6GSx3FY6w/qQ2E0@l:QSi/1V[^D,d4*,O7my;87$cFfmY_+ObL9^vQjZM}[7');

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
