var HFS = module.exports

// Looks like the following might be the HFS+ magic
// 'H+' [48 2b] (header apparently at 0x400 (?))
HFS.MAGIC = 0x2B48

HFS.VERSION_STRING = "hfs-2 (4-12-99)"

// ???
HFS.LINK_MAX = 32767
// ???
HFS.MAX_DEFERRED_ALLOC = 1024 * 1024

// 400 megs is a "big" file (i.e. one that when deleted
// would touch enough data that we should break it into
// multiple separate transactions)
HFS.BIGFILE_SIZE = 400 * 1024 * 1024

// Size of I/O transfer to read entire MDB (???)
// (MDB = Master Directory Block)
HFS.MDB_SIZE = 512
HFS.MDB_OFFSET = 2

// HFS mount point flags
HFS.READ_ONLY                   = 0x00000001
HFS.UNKNOWN_PERMS               = 0x00000002
HFS.WRITEABLE_MEDIA             = 0x00000004
HFS.CLEANED_ORPHANS             = 0x00000008
HFS.X                           = 0x00000010
HFS.CASE_SENSITIVE              = 0x00000020
HFS.STANDARD                    = 0x00000040
HFS.METADATA_ZONE               = 0x00000080
HFS.FRAGMENTED_FREESPACE        = 0x00000100
HFS.NEED_JNL_RESET              = 0x00000200
HFS.HAS_SPARSE_DEVICE           = 0x00000400
HFS.RESIZE_IN_PROGRESS          = 0x00000800
HFS.QUOTAS                      = 0x00001000
HFS.CREATING_BTREE              = 0x00002000
HFS.SKIP_UPDATE_NEXT_ALLOCATION = 0x00004000
HFS.XATTR_EXTENTS               = 0x00008000
HFS.FOLDERCOUNT                 = 0x00010000
HFS.VIRTUAL_DEVICE              = 0x00020000
HFS.IN_CHANGEFS                 = 0x00040000
HFS.RDONLY_DOWNGRADE            = 0x00080000
HFS.DID_CONTIG_SCAN             = 0x00100000
HFS.UNMAP                       = 0x00200000
HFS.SSD                         = 0x00400000
HFS.SUMMARY_TABLE               = 0x00800000
HFS.CS                          = 0x01000000

/**
 * VFS/HFS Journal
 * @type {Function}
 */
HFS.Journal = require( './journal' )
