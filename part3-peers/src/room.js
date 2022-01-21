const peers = new Map();

export const addPeer = (peer) => {
  if (hasPeerById(peer.id)) {
    return false;
  }

  peers.set(peer.id, peer);

  return true;
};

export const hasPeerById = (peerId) => {
  return peers.has(peerId);
};

export const removePeerById = (peerId) => {
  return peers.delete(peerId);
};
