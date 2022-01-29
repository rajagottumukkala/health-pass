# Zokrates code and ABI

Will be generated in the browser dynamically based on the .zok file. See `../zokrates_green_certificate.js`.

# The proving key and verification key, verifier contract

These are generated with the following commands:

```
zokrates@8a4c0441844b:/src/health-dapp/src/zokrates$ zokrates setup
Performing setup...
WARNING: You are using the G16 scheme which is subject to malleability. See zokrates.github.io/toolbox/proving_schemes.html#g16-malleability for implications.
Verification key written to 'verification.key'
Proving key written to 'proving.key'
Setup completed
zokrates@8a4c0441844b:/src/health-dapp/src/zokrates$ zokrates export-verifier
Exporting verifier...
Verifier exported to 'verifier.sol'
```

# Trusted setup

!!! Do not use this in production yet. This is a proof of concept

For simplicity we are using the default simple setup. This means that the person who did the setup might create fake proofs.

Trusted set up how to: https://zokrates.github.io/toolbox/trusted_setup.html