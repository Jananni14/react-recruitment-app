import uuid from "uuid/v4";
const itemsinOpen = [
  {
    id: uuid(),
    name: "Keerthana Venkatraman",
    company: "Dzynlabs"
  },
  {
    id: uuid(),
    name: "Sivaraman Venkatraman",
    company: "Dzynlabs"
  },
  {
    id: uuid(),
    name: "Pravin Venkatraman",
    company: "Dzynlabs"
  }
];
const itemsinContacted = [
  {
    id: uuid(),
    name: "Pravin Raj",
    company: "Dzynlabs"
  },
  {
    id: uuid(),
    name: "Aaqil Mahahoob",
    company: "Dzynlabs"
  }
];
const itemsinWritten = [
  {
    id: uuid(),
    name: "Radhika Venkatraman",
    company: "Dzynlabs"
  },
  {
    id: uuid(),
    name: "Dinesh Kumar Venkatraman",
    company: "Dzynlabs"
  }
];
const columnsFromBackend = {
  [uuid()]: {
    name: "Open",
    type: "open",
    items: itemsinOpen
  },
  [uuid()]: {
    name: "Contacted",
    type: "round1",
    items: itemsinContacted
  },
  [uuid()]: {
    name: "Written",
    type: "round1",
    items: itemsinWritten
  },
  [uuid()]: {
    name: "Techical round",
    type: "round2",
    items: []
  },
  [uuid()]: {
    name: "Culture fit round",
    type: "round2",
    items: []
  },
  [uuid()]: {
    name: "Offer",
    type: "offer",
    items: []
  }
};

export { columnsFromBackend, itemsinOpen, itemsinContacted, itemsinWritten };
