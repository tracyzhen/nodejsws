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
define('AUTH_KEY',         '#a8GR0p7^n[>65blvN:eC?Yz*w[+=?=8r;1F?Z^}^no~Wo6*TVwL0<B^{O^=x)]Z');
define('SECURE_AUTH_KEY',  'f:[P^!Mp3L.iIOrCWBp+PLmQK#mcIr#9o|k<{W%0@G, TVnFFT6y3q~oIi_-yuTz');
define('LOGGED_IN_KEY',    '#Y0QZV6=SJcy_0>bHOQ>o,hV*a^n!>b^+H=z&e`0oH`JZFhsW%XA/9x ^ Yve@]7');
define('NONCE_KEY',        '=6y-RA{mAq6.=U .u^jwY%x,l-L%eZ()IVQ!dpA%i`Mj1u3zF;kmy &NppsHe]@l');
define('AUTH_SALT',        'K43k*=K8Owe)tXx5,ho*<mevCQbPXqEw8e7@A]` u<t4ec.rMQ@vzF}3k_=fvjJr');
define('SECURE_AUTH_SALT', 'wS<Ufur=DT#w:]xhxB#ESQ{17*lmt|rY0?HmVmx#U>eRlcK}wT*yY[^XDxkOv{eS');
define('LOGGED_IN_SALT',   '4_i3>2x}n$wy%`.]gyQ.U^[Hk_xLRO7L1mXeONLdcV,uFAm`*;$Gvpl5*xLEe#If');
define('NONCE_SALT',       't9U]`/syi^^,<0+^iH8!TnfG_-6O2#HlIKAC)gu_LdM{izK^oW1ozcZB8nM[-r(s');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each a unique
 * prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'wp2_';

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
