export const C=Object.freeze({CHUNK:512,ROAD:90,SEED:75319,LOAD_RADIUS:3,UNLOAD_RADIUS:5,MAX_TEXTURES:20,PLAYER_SPEED:205,PLAYER_RADIUS:12,ACCEL:1250,FRICTION:1500,DASH_SPEED:650,DASH_TIME:.13,DASH_COOLDOWN:1.25,MAX_BULLETS:50,MAX_ENEMIES:40,MAX_VFX:30,PISTOL_RATE:.19,SHOTGUN_RATE:.78,SHOTGUN_CLIP:6,SHOTGUN_RESERVE:36,RELOAD_TIME:1.35,LAYERS:{PLAYER:1,ENEMY:2,PLAYER_BULLET:4,ENEMY_BULLET:8,WALL:16}});
/** Hash determinístico de coordenadas, incluindo posições negativas. */
export function hash(x,y,seed=C.SEED){let n=Math.imul(x|0,374761393)^Math.imul(y|0,668265263)^seed;n=Math.imul(n^(n>>>13),1274126177);return ((n^(n>>>16))>>>0)/4294967295}
/** Limita um valor ao intervalo indicado. */
export function clamp(n,a,b){return Math.max(a,Math.min(b,n))}
