export const toSlug = (v:string)=>v.normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase().replace(/\s+/g,'_').replace(/[^a-z0-9_]/g,'');
