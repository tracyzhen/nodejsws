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
define('AUTH_KEY',         '}$HLAE@vQoXAS.r.D&e7mHS4gPsaO!1Ih|c6)+1DUyq?YhdwQ}DxCao%%|S`q=[h');
define('SECURE_AUTH_KEY',  '::O)p]kt`ZPQVb5n`dQEoQiXAx#b#pl6ad~_&+om[3f]J1N;BK)I_D<A%BO(jchp');
define('LOGGED_IN_KEY',    'Rd<Sh);*T#i]:iC}D:H#C(d+Ed^oO@( .LZ!4TN8.0gV1e}2*^V.RC0!YH-P$e6,');
define('NONCE_KEY',        'GF(&/<3J,JnG-`6F/<B9{Y8W@|<:SO3Bi:00A-CQ`J^n[r>PX[0d#j|?s@zM{c+o');
define('AUTH_SALT',        '9zbD=IQSab{<+:1qv_:uEIU~?YCNPTS6xN,gLC:4,lbrV^{uG>iC0?kI3>Y(dbA{');
define('SECURE_AUTH_SALT', 'g9kpJ%at1U?,1VtXDl&{$-Y#/aFw/jVjA5v9tA[F@O!@D_s&Hl()=KR879:v)Hb]');
define('LOGGED_IN_SALT',   '?J*kG):7w4+JchYnN-g,jYM@>J>GbS E,/5kvEqAJ11izU{2K[jNSyEw6h*Ym9Rt');
define('NONCE_SALT',       ':jhM/jZVP_f^YUVOMYC9],j_&1G5Vd^Z=|I3tkjF%gVd?XdJ@^Eae(dRH3LJ@>=h');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each a unique
 * prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'wp5_';

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
