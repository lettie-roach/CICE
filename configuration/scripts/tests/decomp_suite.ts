# Test         Grid    PEs        Sets    BFB-compare
decomp         gx3     4x2x25x29x4
restart        gx3     4x2x25x29x4   dslenderX2
restart        gx3     4x1x25x116x1  dslenderX1,thread  restart_gx3_4x2x25x29x4_dslenderX2
restart        gx3     8x2x5x29x10   dsquarepop         restart_gx3_4x2x25x29x4_dslenderX2
restart        gx3     2x2x5x29x40   dsectcart          restart_gx3_4x2x25x29x4_dslenderX2
restart        gx3     6x2x4x29x18   dspacecurve        restart_gx3_4x2x25x29x4_dslenderX2
restart        gx3     8x2x8x10x20   droundrobin        restart_gx3_4x2x25x29x4_dslenderX2
restart        gx3     6x2x50x58x1   droundrobin        restart_gx3_4x2x25x29x4_dslenderX2
restart        gx3     4x2x19x19x10  droundrobin        restart_gx3_4x2x25x29x4_dslenderX2
restart        gx3     1x20x5x29x80  dsectrobin         restart_gx3_4x2x25x29x4_dslenderX2
restart        gx3     16x2x5x10x15  drakeX2            restart_gx3_4x2x25x29x4_dslenderX2
restart        gx3     1x1x100x116x1 droundrobin

