initSidebarItems({"constant":[["APPEND","Force all writes to append data at the end of the file."],["ATOMIC","Inform the remote that an atomic rename operation is desired if available"],["CREATE","If this flag is specified, then a new file will be created if one does not already exist (if Truncate is specified, the new file will be truncated to zero length if it previously exists)"],["EXCLUSIVE","Causes the request to fail if the named file already exists. Using this flag implies the `Create` flag."],["NATIVE","Inform the remote end that the native system calls for renaming should be used"],["OVERWRITE","In a rename operation, overwrite the destination if it already exists. If this flag is not present then it is an error if the destination already exists"],["READ","Open the file for reading."],["TRUNCATE","Forces an existing file with the same name to be truncated to zero length when creating a file by specifying `Create`. Using this flag implies the `Create` flag."],["WRITE","Open the file for writing. If both this and Read are specified, the file is opened for both reading and writing"]],"enum":[["CheckResult","Possible results of a call to `KnownHosts::check`"],["DisconnectCode",""],["HashType",""],["HostKeyType",""],["KnownHostFileKind",""],["KnownHostKeyFormat",""],["MethodType",""],["OpenType","How to open a file handle with libssh2."]],"fn":[["init","Initialize the libssh2 library."]],"static":[["EXTENDED_DATA_STDERR","Stream ID of the stderr channel for stream-related methods on `Channel`"],["FLUSH_ALL","When passed to `Channel::flush_stream`, flushes all substream."],["FLUSH_EXTENDED_DATA","When passed to `Channel::flush_stream`, flushes all extended data substreams."]],"struct":[["Agent","A structure representing a connection to an SSH agent."],["Channel","A channel represents a portion of an SSH connection on which data can be read and written."],["Error","Representation of an error that can occur within libssh2"],["ExitSignal","Data received from when a program exits with a signal."],["File","A file handle to an SFTP connection."],["FileStat","Metadata information about a remote file."],["Host","Structure representing a known host as part of a `KnownHosts` structure."],["Hosts","Iterator over the hosts in a `KnownHosts` structure."],["Identities","An iterator over the identities found in an SSH agent."],["KnownHosts","A set of known hosts which can be used to verify the identity of a remote server."],["Listener","A listener represents a forwarding port from the remote server."],["OpenFlags","Options that can be used to configure how a file is opened"],["PublicKey","A public key which is extracted from an SSH agent."],["ReadWindow","Description of the read window as returned by `Channel::read_window`"],["RenameFlags","Options to `Sftp::rename`"],["ScpFileStat","Metadata returned about a remote file when received via `scp`."],["Session","An SSH session, typically representing one TCP connection."],["Sftp","A handle to a remote filesystem over SFTP."],["Stream","A channel can have a number of streams, each identified by an id, each of which implements the `Read` and `Write` traits."],["WriteWindow","Description of the write window as returned by `Channel::write_window`"]]});