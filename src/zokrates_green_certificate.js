import zokrates_program from './zokrates/eu_health_certificate.zok';
import zokrates_proving_key from './zokrates/proving.key';

import { initialize } from 'zokrates-js';

// Return promise with proof
function proof_valid_eu_green_certificate(raw_qr_data) {
  console.log({ zokrates_program, zokrates_proving_key });

  return initialize().then((zokratesProvider) => {
    console.log("zokratesProvider", zokratesProvider)
    // compilation
    const source = zokrates_program;
    const artifacts = zokratesProvider.compile(source);

    // computation
    const { witness, output } = zokratesProvider.computeWitness(artifacts, ["2"]);

    const proof = zokratesProvider.generateProof(artifacts.program, witness, new Uint8Array(zokrates_proving_key));


    console.log(proof);

    return proof;
  });
}

export default proof_valid_eu_green_certificate;
