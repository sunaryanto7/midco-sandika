const useDomains = (hostname) => {
  let storeConfig = hostname ? require(`@principals/[${hostname}]/data-generates.json`) : {};
  return storeConfig;
}

export { useDomains }