import React, {useState} from 'react';
import {StyleSheet, View, Button, Text, TouchableOpacity} from 'react-native';
import {Gap, NumberInput, Footer} from '.';
import {winRateCalculate} from '../utils';

const Content = () => {
  const [winRate, setWinRate] = useState();
  const [totalMatch, setTotalMatch] = useState();
  const [wantedWinRate, setWantedWinRate] = useState();
  const [err, setErr] = useState({isErr: false});
  const [valueFinal, setValueFinal] = useState({});
  const [loading, setLoading] = useState(false);

  const isCanCalculate = +winRate > 0 && +totalMatch > 0 && +wantedWinRate > 0;

  const calculate = (wantedWinrate, totalMatch, winrate) => {
    setLoading(true);
    setTimeout(() => {
      setValueFinal(winRateCalculate(wantedWinrate, totalMatch, winrate));
      setLoading(false);
    }, 1500);
  };
  const onPress = () => {
    setErr({isErr: false});

    if (+winRate > +wantedWinRate)
      return setErr({
        isErr: true,
        message: 'your winrate must lower than winrate you want!!',
      });

    return isCanCalculate
      ? calculate(+wantedWinRate, +totalMatch, +winRate)
      : setErr({isErr: true, message: 'Fill the data!!'});
  };

  return (
    <View style={styles.wrapper}>
      <View style={styles.content}>
        <Gap height={60} />
        {err.isErr && <Text style={styles.err}>{err.message}</Text>}
        <View style={styles.row}>
          <View style={styles.widthTwoInput}>
            <NumberInput
              value={winRate}
              onChangeText={value => value <= 100 && setWinRate(value)}
              isPercent
              label="Your winrate"
            />
          </View>
          <Gap width={8} />
          <View style={styles.widthTwoInput}>
            <NumberInput
              value={totalMatch}
              onChangeText={value => setTotalMatch(value)}
              label="Total match"
            />
          </View>
        </View>
        <Gap height={16} />
        <NumberInput
          value={wantedWinRate}
          onChangeText={value => value <= 100 && setWantedWinRate(value)}
          label="Winrate you want to get"
          isPercent
        />
        <Gap height={48} />
        <TouchableOpacity onPress={onPress} style={styles.buttonWrapper}>
          <Text style={styles.buttonTitle}>Calculate</Text>
        </TouchableOpacity>
        <Gap height={120} />
        <View style={styles.resultWrapper}>
          <Footer
            loading={loading}
            winRate={valueFinal.winRate}
            winGame={valueFinal.winGame}
          />
        </View>
      </View>
    </View>
  );
};

export default Content;

const styles = StyleSheet.create({
  wrapper: {backgroundColor: '#020202', flex: 1},
  content: {
    backgroundColor: '#f5f5f5',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    paddingHorizontal: 16,
    flex: 1,
  },
  row: {flexDirection: 'row'},
  widthTwoInput: {width: '50%'},
  err: {
    color: '#020202',
    fontSize: 14,
    backgroundColor: '#D9435E',
    paddingVertical: 5,
    paddingHorizontal: 16,
    marginBottom: 8,
  },
  resultWrapper: {minHeight: 200, position: 'relative', marginBottom: 65},
  buttonTitle: {textAlign: 'center', fontSize: 18, color: '#f5f5f5'},
  buttonWrapper: {backgroundColor: '#B58958', padding: 10},
});
