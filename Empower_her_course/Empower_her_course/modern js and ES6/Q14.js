const profile = { 
    name: "Charlie", 
    age: 29, 
    address: { 
        city: "San Francisco", 
        zipcode: "94101" 
    } 
};

const updates = { 
    age: 30, 
    address: { 
        zipcode: "94109", 
        country: "USA" 
    } 
};

const mergeProfile = (original, newUpdates) => {
    const merged = {
        ...original,
        ...newUpdates,
        address: {
            ...original.address,
            ...newUpdates.address
        }
    };
    return merged;
};

const mergedProfile = mergeProfile(profile, updates);

console.log(mergedProfile);